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
    <button onClick={incrememntLocal}>Click to increment local</button>
    <h1>Local Counter: {localNumber}</h1>
    </>
  )
}




