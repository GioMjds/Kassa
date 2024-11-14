import { FC } from "react"

const LoadingSpinner: FC = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  )
}

export default LoadingSpinner