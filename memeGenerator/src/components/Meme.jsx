import React, { useState } from "react";
import memeData from "../memeData"
const Meme = () => {
  const[memeImage,setmemeImage]=useState("https://i.imgflip.com/30b1gx.jpg");

  function getRandomImage(){
    const memeArray=memeData.data.memes;
    const randomNumber=Math.floor(Math.random()*memeArray.length);
    const url=memeArray[randomNumber].url
    setmemeImage(url);

  }
 
  return (
    <div className="p-8">
      <div className=" p-6 flex justify-between w-[100%]">
        <input
          type="text"
          placeholder="Top text"
          className=" py-2 px-2  w-[45%] border-[1.2px] border-gray-300 text-black focus:outlline outline-4 outline-blue-400 rounded-md "
        />
        <input
          type="text"
          placeholder="Bottom text"
          className=" py-2 px-2 w-[45%] border-[1.2px] border-gray-300 text-black focus:outlline outline-4 outline-blue-400  rounded-md"
        />
      </div>
      <button
        className=" ml-6  bg-gradient-to-r from-fuchsia-950 to-fuchsia-600 w-[93%]  rounded-md p-2"
        onClick={getRandomImage}
      >
        Get a new Image🖼️
      </button>
      <img src={memeImage} alt="Invalid" 
       className="w-[90%] h-[400px] m-auto mt-6"
      />
    
    </div>
  );
};
export default Meme;
