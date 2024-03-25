import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colors }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 bg-white shadow-lg px-3 py-2 rounded">
          <button
            className="px-4 py-1 bg-red-700 rounded text-white shadow-lg outline-none"
            onClick={() => {
              setColors("red");
            }}
          >
            Red
          </button>
          <button
            className="px-4 py-1 bg-blue-700 rounded text-white shadow-lg outline-none"
            onClick={() => {
              setColors("blue");
            }}
          >
            Blue
          </button>
          <button
            className="px-4 py-1 bg-green-700 rounded text-white shadow-lg outline-none"
            onClick={() => {
              setColors("green");
            }}
          >
            Green
          </button>
          <button
            className="px-4 py-1 bg-violet-800 rounded text-white shadow-lg outline-none"
            onClick={() => {
              setColors("violet");
            }}
          >
            Voilet
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
