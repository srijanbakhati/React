import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data=useLoaderData()
//   const [data, setData] = useState([]); //we are making an api call so taking array as inital state.
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://api.github.com/users/srijanbakhati");
//         const data = await res.json();
//         console.log(data);
//         setData(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);
  return (
    <>
      <div className="bg-gray-500 text-white text-3xl text-center p-3">
        Github Following: {data.following}
      </div>
      <img className="m-auto mt-6 mb-6" src={data.avatar_url} alt="Invalid" />
    </>
  );
};

export default Github;

export const githubInfo=async()=>{
    const response=await fetch('https://api.github.com/users/srijanbakhati')
    return response.json()

}
