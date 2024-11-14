import { FC } from "react"

interface ChatCardProps {
  question: string;
  icon: JSX.Element;
}

const ChatCard: FC<ChatCardProps> = ({ question, icon }) => {
  return (
    <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#201f1f] px-[20px] relative min-h-[20vh] bg-button p-[10px]">
      <p className="text-[18px]">{question}</p>
      <i className="absolute right-3 bottom-3 text-[18px]">{icon}</i>
    </div>
  )
}

export default ChatCard