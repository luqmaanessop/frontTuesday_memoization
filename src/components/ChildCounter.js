import React, {memo} from 'react';

const ChildCounter = (props) => {
  function changeNumber() {
    props.changeNumber(Math.random());
  }

  return (
    <div class="p-6">
      <h1 class="text-xl mb-1">Child Counter: {props.number}</h1>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={changeNumber}>Click to randomize the child number</button>
    </div>
  )
}

export default memo(ChildCounter);
