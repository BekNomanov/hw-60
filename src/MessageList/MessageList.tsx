import React from 'react';

const MessageList: React.FC<MessageListProps> = ({ messages }) => (
  <div>
    {messages.map((msg) => (
      <div key={msg._id} className='card'>
        <div className='date'>
          <span className='date-item'>Date: {msg.datetime}</span>
        </div>
        <strong className='author'>Author: {msg.author}</strong> <br/>
        <span className='message'>
         Message: {msg.message}
        </span>
      </div>
    ))}
  </div>
);

export default MessageList;