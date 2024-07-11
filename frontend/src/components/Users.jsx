import { useState } from "react" 
import { InputBox } from "./InputBox" 
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SendMoney } from "./SendMoney";

export const Users = () => {
  
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then(response => {
        setUsers(response.data.user)
      })
  }, [filter])

  return (
    <>
      <div className="font-primaryBold mt-6 text-2xl">
        Users
      </div>
      <div className="my-2"s> 
        <input onChange={(e) => {
          setFilter(e.target.value)
        }} type="text" placeholder="search users..." className="font-primaryLight w-full px-2 py-1 border rounded-sm border-slate-200 focus:outline-none focus:border-[#6D9886]" />
      </div>
      <div>
        {users.map(user => <SendMoney user={user}/>)}
      </div>
    </>
  )
}