import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


const Login = () => {
    const[userName,setUserName]=useState('')
    const[password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)

    const handleClick=(e)=>{
        e.preventDefault()
        setUser({userName,password})

    }

  return (
    <div className="flex  flex-col flex-wrap items-center p-10 ">
        <div className="w-2/5 h-3/4 bg-purple-300 px-6 py-10 rounded-md shadow-md">
        <div className="flex flex-col mb-4">
            <label htmlFor="">Username</label>
            <input className='rounded  px-2 py-1' 
            type="text"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            />
        </div>
        <div className="flex flex-col">
            <label 
            className='text-md'
            htmlFor="">Password</label>
            <input className='rounded px-2 py-1' 
            type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <button
        className=' m-auto flex px-3 py-2 item-center mt-6 bg-slate-500  text-white rounded-lg font-semibold '
        onClick={handleClick}
        >Submit</button>
        </div>    
    </div>
  )
}

export default Login