import React, {useCallback, useState} from 'react';
import Navbar from '../components/Navbar';
import ChildCounter from '../components/ChildCounter'


export default function UseCallback() {
  const [localNumber, setLocalNumber] = useState(0)
  const [childNumber, setChildNumber] = useState(0)

  function incrememntLocal() {
    setLocalNumber(state => state + 1)
  }

  // 💰 Uncomment below to use the memoized version of the function, then pass this function to the ChildCounter changeNumber prop instead.
  // const memoizedCallback = useCallback(number => changeChildNumber(number), [])

  function changeChildNumber(number) {
    setChildNumber(number)
  }

  // Passing a function(changeNumber) as a prop - ChildCounter will no longer be properly memoized without using useCallback, use the memoizedCallback instead.
  return (
    <>
    <Navbar />
    <ChildCounter number={childNumber} changeNumber={changeChildNumber}/>
    <h1 class="text-xl ml-6">Local Counter: {localNumber}</h1>
    <button class="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={incrememntLocal}>Click to increment local</button>
    </>
  )
}




