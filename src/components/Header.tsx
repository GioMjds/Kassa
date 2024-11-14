import { FC } from "react";

interface HeaderProps {
    onNewChat: () => void;
}

const Header: FC<HeaderProps> = ({ onNewChat }) => {
  return (
    <div className="header pt-[25px] flex items-center justify-between w-full px-[20px]">
        <h2 className="text-3xl font-bold">Kassa</h2>
        <button
            id="newChatBtn"
            className="bg-button p-[10px] rounded-[30px] cursor-pointer text-[14px] px-[20px]"
            onClick={onNewChat}
        >
            New Chat
        </button>
    </div>
  )
}

export default Header