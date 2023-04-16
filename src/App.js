import { useState } from "react";
import SortingVisualizer from "./Components/SortingVisualizer";

const numberOfArrayBars = 10;
const minValue = 10;
const maxValue = 500;
function App() {
  const startArr= [];
  for(let i=10; i<maxValue; i+=10){
    startArr.push(i);
  }

  const [array, setArray] = useState(startArr);


  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function renderArray() {
    const arr = [];
    for (let i = 0; i < numberOfArrayBars; i++) {
      arr.push(randomIntFromInterval(minValue, maxValue));
    }

    setArray(arr);
  }

  return (
    <div className="h-screen">
      <div className="px-10 py-5 bg-gray-100">
        <button onClick={renderArray} className="w-fit bg-red-300 px-3 py-2 mx-auto bg-red rounded ">Generate Array</button>
      </div>
      <div className="bg-gray-100 h-[49rem] flex flex-col ">
        <div className="px-20 pt-20 rounded h-[35rem] flex space-x-2 items-end justify-center w-fit mx-auto mt-20 ">

          {array.map((value, index) => (

            <div key={index} style={{ height: value }} className={`w-[10px] bg-pink-500 rounded `}>
              {/* {console.log(value)} */}
            </div>
          ))}


        </div>
          <div className="bg-red-300 h-2"></div>
        <div className="w-fit mx-auto flex space-x-4 font-bold text-white mt-10">
          <div className="rounded-full px-5 py-2 bg-pink-500">No of Bars: {array.length}</div>
          <div className="rounded-full px-5 py-2 bg-pink-500">Min: {minValue}</div>
          <div className="rounded-full px-5 py-2 bg-pink-500">Max: {maxValue}</div>
        </div>
      </div>

    </div>
  );
}

export default App;
