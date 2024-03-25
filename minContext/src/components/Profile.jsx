import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user}=useContext(UserContext)
    if(!user) return(<h1 className='text-center'>Please Login first</h1>)
    return(
        <div className="text-center">My userName is {user.userName} and password is {user.password}</div>
    )
 
}

export default Profile