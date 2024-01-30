import React, { useEffect, useState } from 'react';
import MessageForm from '../MessageForm/MessageForm';
import MessageList from '../MessageList/MessageList';


const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://146.185.154.90:8000/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data.reverse().slice(-15));
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };


  const postMessage = async (author: string, message: string) => {
    try {
      const url = 'http://146.185.154.90:8000/messages';

      const data = new URLSearchParams();
      data.set('message', message);
      data.set('author', author);

      const result = await fetch(url, {
        method: 'post',
        body: data,
      });

      if (result.ok) {
        const newMessage = await result.json();
        console.log('Message posted successfully');
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  useEffect(() => {
    void fetchMessages();
  }, []);

  return (
    <div className='box'>
      <MessageForm onSendMessage={postMessage} />
      <MessageList messages={messages} />
    </div>
  );
};

export default Chat;