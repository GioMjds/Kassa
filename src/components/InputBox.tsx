import { FC } from "react"
import { IoSend } from "react-icons/io5"

interface InputBoxProps {
    message: string;
    setMessage: (value: string) => void;
    onSend: () => void;
}

const InputBox: FC<InputBoxProps> = ({ message, setMessage, onSend }) => {
  return (
    <div className="inputBox w-[60%] text-[15px] py-[7px] flex items-center bg-button rounded-[30px]">
        <input 
            type="text" 
            onChange={e => setMessage(e.target.value)}
            value={message}
            className="p-[10px] pl-[15px] bg-transparent flex-1 outline-none border-none"
            placeholder="Write your prompt here..."
            id="messageBox"
        />
        {message && (
            <i 
                className="text-green-500 text-[20px] mr-5 cursor-pointer"
                onClick={onSend}
            >
                <IoSend />
            </i>
        )}
    </div>
  )
}

export default InputBox