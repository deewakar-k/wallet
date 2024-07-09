
export const Balance = ({value}) => {
  return (
    <div className="mt-5">
      <div className="font-bold text-2xl">
        Balance
      </div>
      <div className="font-light text-sm mt-4">
        Available Now
        <div className="font-bold text-lg mt-1">
          ${value}
        </div>
      </div>
    </div>
  )
}
