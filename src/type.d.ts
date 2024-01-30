interface Message {
  _id: string;
  message: string;
  author: string;
  datetime: string;
}

interface MessageFormProps {
  onSendMessage: (author: string, message: string) => void;
}

interface MessageListProps {
  messages: Message[];
}
