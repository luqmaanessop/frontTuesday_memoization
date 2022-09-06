import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import ChildCounter from '../components/ChildCounter'


export default function Memo() {
  const [localNumber, setLocalNumber] = useState(0)
  const [childNumber, setChildNumber] = useState(0)

  function incrememntLocal() {
    setLocalNumber(state => state + 1)
  }

  return (
    <>
    <Navbar />
    <ChildCounter number={childNumber}/>
    <button class="mt-4 ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={incrememntLocal}>Click to increment local</button>
    <h1 class="text-xl pl-6">Local Counter: {localNumber}</h1>
    </>
  )
}




