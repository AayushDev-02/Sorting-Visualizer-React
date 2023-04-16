import React, {  useState } from 'react'



const numberOfArrayBars = 5;

const SortingVisualizer = () => {

  const [array, setArray] = useState([]);



  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function renderArray() {
    const arr = [];
    for (let i = 0; i < numberOfArrayBars; i++) {
      arr.push(randomIntFromInterval(5, 730));
    }

    setArray(arr);
  }

  // console.log(array)


  return (
    
    <div className='relative w-fit'>
      <div className='fixed top-0 bg-gray-100 w-full px-10 py-5'>
        <button onClick={renderArray} className='w-fit bg-red-300 mx-auto bg-red rounded '>Generate Array</button>
      </div>
      <div className='flex space-x-2 mx-auto  my-40 w-fit '>
        {array.map((value, index) => (
          
          <div key={index} style={{height:value}} className={`w-[2px] bg-black `}>
            {/* {console.log(value)} */}
          </div>
        ))}
      </div>


      
    </div>
  )
}

export default SortingVisualizer
