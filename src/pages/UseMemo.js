import React, {useCallback, useState, useMemo} from 'react';
import Navbar from '../components/Navbar';
import ChildCounter from '../components/ChildCounter'


export default function UseMemo() {
  const [localNumber, setLocalNumber] = useState(0)
  const [childNumber, setChildNumber] = useState(0)
  // This is where you would use useMemo, to memoize expensives calculations
  const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10])

  const memoizedCallback = useCallback(number => changeChildNumber(number), [])
  // 💰 Uncomment out the memoizedLargestValue and use it instead of the getLargestNumber() function directly
  // const memoizedLargestValue = useMemo(() => getLargestNumber(), [arr])

  function incrememntLocal() {
    setLocalNumber(state => state + 1)
  }


  function changeChildNumber(number) {
    setChildNumber(number)
  }

  // This is super expensive, maybe its a fetch request
  function getLargestNumber() {
    console.warn("Calculating largest number - this is so expensive, aargh my resources!");
    return Math.max(...arr);
  }

  function changeArray() {
    const min = 1;
    const max = 1000;
    setArr(Array.apply(null, Array(10)).map(function () { return Math.floor(Math.random() * (max - min + 1)) + min;}))
  }
  function resetArray() {
    setArr([1,2,3,4,5,6,7,8,9,10])
  }

  const ArrayOutput = () => {
    return (
      <ul className='ml-6 flex'>
        [{arr.map((item, index) => (
          <li key={item}>{item}{index == arr.length - 1 ? "" : ","}</li>
        ))}]
      </ul>
    );
  }

  return (
    <>
    <Navbar />
    <ChildCounter number={childNumber} changeNumber={memoizedCallback}/>
    <h1 class="ml-6 text-xl">Local Counter: {localNumber}</h1>
    <button class="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={incrememntLocal}>Click to increment local</button>
    <h2 class="mt-8 ml-6 text-xl">Largest number of Array: {getLargestNumber()}</h2>
    <ArrayOutput />
    <button class="ml-6 mt-4 mr-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={changeArray}>Generate random array</button>
    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={resetArray}>Reset array to default</button>
    </>
  )
}




