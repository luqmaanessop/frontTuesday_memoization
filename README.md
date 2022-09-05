# React's memoization

React has three APIs for memoization: memo, useMemo, and useCallback. The caching strategy React has adopted has a size of 1. That is, they only keep around the most recent value of the input and result. There are various reasons for this decision, but it satisfies the primary use case for memoizing in a React context.

So for React's memoization it's more like this:

```
let prevInput, prevResult
function addTwo(input) {
  if (input !== prevInput) {
    prevResult = input + 2
  }
  prevInput = input;
  return prevResult;
}
```

With that:

```
addTwo(3) // 5 is computed
addTwo(3) // 5 is returned from the cache 🤓
addTwo(2) // 4 is computed
addTwo(3) // 5 is computed
```

## To be clear, in React's case it's not a !== comparing the prevInput. It checks equality of each prop and each dependency individually. Let's check each one:

```
// React.memo's `prevInput` is props and `prevResult` is react elements (JSX)
const MemoComp = React.memo(Comp)
// then, when you render it:
<MemoComp prop1="a" prop2="b" /> // renders new elements
// rerender it with the same props:
<MemoComp prop1="a" prop2="b" /> // renders previous elements 🤓
// rerender it again but with different props:
<MemoComp prop1="a" prop2="c" /> // renders new elements
// rerender it again with the same props as at first:
<MemoComp prop1="a" prop2="b" /> // renders new elements
```

## Hints:

### React memo is used like this to solve the rerendering issue:

#### React memo says, only allow me to rerender if my incoming props are changing based on referential equality, every time we go through a render cylce we end up creating a brand new object with new functions if declared inside

```
in the ChildCounter , Navbar components

import React, {memo} from 'react';

export default memo(ComponentName)
```

### useCallback accepts 2 arguments and returns a new function

```
arg 1: the actual function you want to memoize
arg 2: dependency array - specify when this should actually refresh/update itself
```

#### Throughout the lifecycle of this component - the memoized function will point to the same memory address and be true for referential equality
