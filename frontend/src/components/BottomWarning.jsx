import { Link } from "react-router-dom"


export const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className="flex justify-center text-sm">
      <div>
        {label}
      </div>
      <Link className="cursor-pointer underline pl-1" to={to}>
        {buttonText}
      </Link>
    </div>
  )
}
