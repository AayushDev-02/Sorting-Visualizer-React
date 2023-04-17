import { useState } from "react";
import { getMergeSortAnimations } from './Components/SortingAlgo';

const numberOfArrayBars = 80;
const minValue = 10;
const maxValue = 600;
const PRIMARY_COLOR = "#B2A4FF"
const SECONDARY_COLOR = "#FFDEB4"
const ANIMAITON_SPEED = 20

function App() {
  const startArr = [];
  for (let i = 10; i < maxValue; i += 10) {
    startArr.push(i);
  }

  const [array, setArray] = useState(startArr);


  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const mergeSort = () => {
    const animation = getMergeSortAnimations(array);
    for(let i = 0; i< animation.length; i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i%3 !== 2;

      if(isColorChange){
        const [barOneIndex, barTwoIndex ] = animation[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR

        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i*ANIMAITON_SPEED);

      }else{
        setTimeout(() => {
          const [barOneIndex, newHeight] = animation[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i*ANIMAITON_SPEED)
      }
    }
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
      <div className="px-10 py-5 bg-red-100 justify-between flex">
        <button onClick={renderArray} className="w-fit bg-pink-500 text-white font-bold px-3 py-2  bg-red rounded ">Generate Array</button>
        <div className="space-x-5">
          <button id="merge-sort" onClick={mergeSort} className="w-fit bg-pink-500 text-white font-bold px-3 py-2  bg-red rounded ">Merge Sort</button>
          <button onClick={mergeSort} className="w-fit bg-pink-500 text-white font-bold px-3 py-2  bg-red rounded ">Quick Sort</button>
          <button onClick={mergeSort} className="w-fit bg-pink-500 text-white font-bold px-3 py-2  bg-red rounded ">Bubble Sort</button>
        </div>
      </div>
      <div className="bg-gray-100 h-[49rem] flex flex-col ">
        <div className="px-20 pt-20 rounded h-[37rem] flex space-x-2 items-end justify-center w-fit mx-auto mt-20 ">

          {array.map((value, index) => (

            <div  key={index} style={{ height: value, backgroundColor: PRIMARY_COLOR }} className={`w-[10px] rounded array-bar shadow-xl `}>
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
