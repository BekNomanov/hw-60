import React, {useState} from 'react';


const MessageForm: React.FC<MessageFormProps> = ({onSendMessage}) => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    onSendMessage(author, message);
    setAuthor('');
    setMessage('');
  };

  return (
    <form className='form'>
      <label className='label'>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      </label>
      <br/>
      <label className='label'>
        Message:
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      </label>
      <br/>
      <div>
        <button type="button" onClick={handleSendMessage} className='custom-btn addBtn'>
          Add Message
        </button>
      </div>
    </form>
  );
};

export default MessageForm;