import React from 'react';
import dayjs from 'dayjs';

const MessageList: React.FC<MessageListProps> = ({ messages }) => (
  <div>
    {messages.map((msg) => (
      <div key={msg._id} className='card'>
        <div className='date'>
          <span className='date-item'>Date: {dayjs(msg.datetime).format('MMMM D, YYYY [at] HH:mm:ss A')}</span>
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
