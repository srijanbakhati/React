import { useState, useEffect } from "react";

const useCurrency = (currency) => {
  const [data, setData] = useState({});

    useEffect(() => {
      fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
        .then((res) => res.json())
        .then((res) => setData(res[currency]));
    }, [currency]);       //OR

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//         );
//         const data = response.json();
//         setData(data[currency]);
//       } catch (error) {
//         console.log(error);
//       }finally{ 
            // console.log("FetchData completed....")
// }
//     };
//     fetchData();
//   }, [currency]);

  console.log(data);
  return data;
};

export default useCurrency;

