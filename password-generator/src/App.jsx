
import { useState, useCallback,useEffect, useRef  } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);

  //Useref hooks
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copytoClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password);

  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8 my-6 shadow-sm text-orange-600 rounded-lg bg-gray-800">
      <h2 className="text-white  text-center my-3 font-bold text-xl">
        Password Generator
      </h2>
      <div className="flex shadow rounded overflow-hidden mb-4 ">
        <input
          className="outline-none rounded-l-md w-3/4 px-2 py-1"
          type="text"
          value={password}
          ref={passwordRef}
          readOnly
        />
        <button className="bg-blue-700 rounded-r-md  px-2 py-1 text-white"
         onClick={copytoClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-3">
        <div className="flex items-center gap-2">
          <input
            className="cursor-pointer text-black"
            value={length}
            min={6}
            max={50}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            type="range"
          />
          <label className="">Length:{length}</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="numberAllowed"
            defaultChecked={numberAllowed}
            className=""
            onClick={() => {
              setNumberAllowed((prevState) => !prevState);
            }}
            type="checkbox"
          />
          <label htmlFor="numberAllowed">Number</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            className=""
            id="characterAllowed"
            type="checkbox"
            defaultChecked={charAllowed}
            onClick={() => {
              setcharAllowed((prevState) => !prevState);
            }}
          />
          <label htmlFor="characterAllowed">Character</label>
        </div>
      </div>
    </div>
  );
};

export default App;
