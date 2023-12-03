import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap shadow-lg bg-white justify-center gap-3 px-2 py-2 rounded-xl">
            <button
              className="outline-none px-4 rounded-2xl text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              red
            </button>
            <button
              className="outline-none px-4 rounded-2xl text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              green
            </button>
            <button
              className="outline-none px-4 rounded-2xl text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
