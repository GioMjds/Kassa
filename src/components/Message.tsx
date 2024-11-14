import { FC } from "react"

interface MessageProps {
  type: string;
  text: string;
}

const Message: FC<MessageProps> = ({ type, text }) => {
  return (
    <div className={type}>{text}</div>
  )
}

export default Message