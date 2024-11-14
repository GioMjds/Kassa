import { FC } from "react";

interface HeaderProps {
    onNewChat: () => void;
}

const Header: FC<HeaderProps> = ({ onNewChat }) => {
  return (
    <div className="header flex items-center justify-between w-full p-4">
        <h2 className="text-3xl font-bold">Kassa</h2>
        <button
            id="newChatBtn"
            className="bg-button p-4 rounded-2xl cursor-pointer text-[14px] px-[20px]"
            onClick={onNewChat}
        >
            New Chat
        </button>
    </div>
  )
}

export default Header