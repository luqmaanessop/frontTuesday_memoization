import React, {useCallback, useState, useMemo} from 'react';
import Navbar from '../components/Navbar';
import ChildCounter from '../components/ChildCounter'


export default function UseMemo() {
  const [localNumber, setLocalNumber] = useState(0)
  const [childNumber, setChildNumber] = useState(0)
  const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10])

  const memoizedCallback = useCallback(number => changeChildNumber(number), [])
  // const memoizedLargestValue = useMemo(() => getLargestNumber(), [arr])
const largestUnmemoizedValue = getLargestNumber();

  function incrememntLocal() {
    setLocalNumber(state => state + 1)
  }


  function changeChildNumber(number) {
    setChildNumber(number)
  }

  function getLargestNumber() {
    console.log("Calculating largest number - this is so expensive");
    return Math.max(...arr);
  }

  function changeArray() {
    setArr([60,70,80,90])
  }

  return (
    <>
    <Navbar />
    <ChildCounter number={childNumber} changeNumber={memoizedCallback}/>
    <button onClick={incrememntLocal}>Click to increment local</button>
    <h1>Local Counter: {localNumber}</h1>
    <h2>Largest number of Array: {largestUnmemoizedValue}</h2>
    <button onClick={changeArray}>Change array</button>
    </>
  )
}




