import { GoogleGenerativeAI } from '@google/generative-ai';
import { FC, useState } from 'react';
import { BiPlanet } from 'react-icons/bi';
import { FaPython } from 'react-icons/fa';
import { IoCodeSlash } from 'react-icons/io5';
import { TbMessageChatbot } from 'react-icons/tb';
import './App.css';
import ChatCard from './components/ChatCard';
import Header from './components/Header';
import InputBox from './components/InputBox';
import Message from './components/Message';

interface MessageType {
  type: 'userMsg' | 'responseMsg';
  text: string;
}

const App: FC<MessageType> = () => {
  const [message, setMessage] = useState<string>("");
  const [isResponsiveScreen, setIsResponsiveScreen] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const generateResponse = async (msg: string) => {
    if (msg.trim() === '') return;

    try {
      const result = await model.generateContent(msg);
      const response = result.response.text();

      const newMessages: MessageType[] = [
        ...messages,
        { type: 'userMsg', text: msg },
        { type: 'responseMsg', text: response },
      ];

      setMessages(newMessages);
      setIsResponsiveScreen(true);
      setMessage("");
    } catch (e) {
      console.error(`Error occured while fetching: ${e}`)
    }
  }

  const hitRequest = () => {
    if (message) generateResponse(message);
    else alert("You must write something.");
  };

  const newChat = () => {
    setIsResponsiveScreen(false);
    setMessages([]);
  }

  return (
    <div className='container overflow-hidden bg-custom-gradient text-white flex flex-col max-w-full h-screen p-4'>
      {isResponsiveScreen ? (
        <div className='flex flex-col h-[80vh]'>
          <Header onNewChat={newChat} />
          <div className="messages flex flex-col p-4">
            {messages?.map((msg, index) => (
              <Message key={index} type={msg.type} text={msg.text} />
            ))}
          </div>
        </div>
      ) : (
        <div className='h-[85vh] flex items-center flex-col justify-center'>
          <h1 className='text-4xl font-bold'>Ask Kassa AI Anything</h1>
          <div className='boxes mt-8 flex items-center gap-2 flex-wrap'>
            <ChatCard question="What is coding ? How we can learn it." icon={<IoCodeSlash />} />
            <ChatCard question="Which is the red planet of solar system?" icon={<BiPlanet />} />
            <ChatCard question="In which year was Python invented?" icon={<FaPython />} />
            <ChatCard question="How can we use AI for adoption?" icon={<TbMessageChatbot />} />
          </div>
        </div>
      )}
      <div className='bottom w-full flex flex-col items-center'>
        <InputBox message={message} setMessage={setMessage} onSend={hitRequest} />
        <p className='text-white text-sm my-4'>&copy; Kassa | {new Date().getFullYear()} | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default App