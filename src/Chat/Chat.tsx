import React from 'react';
import MessageForm from '../MessageForm/MessageForm';

const Chat : React.FC = () => {

  const fetchMessage = async() => {
    const response = await fetch('http://146.185.154.90:8000/messages');
    if (response.ok) {
      const data = await response.json();
      console.log(data)
    }
  }
  void fetchMessage();

  return (
    <div>
      <MessageForm/>
    </div>
  );
};

export default Chat;