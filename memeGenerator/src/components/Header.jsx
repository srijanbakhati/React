import React from 'react'
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <nav className="p-5 w-full  bg-gradient-to-r from-fuchsia-950 to-fuchsia-600 p-4 flex 
    justify-between items-center  shadow-md">
        <div className="flex items-center">
        <img src={Logo} alt="Invalid"
        className=' mx-4 w-10'
        />
        <h1 className='text-2xl font-semibold tracking-tighter'>Meme Generator</h1>
        </div>
        <h3>React Course-Project 3</h3>
        
        
    </nav>

  )
}

export default Header
