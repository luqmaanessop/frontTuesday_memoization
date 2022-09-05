import React, {memo} from 'react';

const ChildCounter = (props) => {
  function changeNumber() {
    props.changeNumber(Math.random());
  }

  return (
    <div>
      <h1>Child Counter: {props.number}</h1>
      <button onClick={changeNumber}>Click to randomize the child number</button>
    </div>
  )
}

export default memo(ChildCounter);
