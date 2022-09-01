# React's memoization

React has three APIs for memoization: memo, useMemo, and useCallback. The caching strategy React has adopted has a size of 1. That is, they only keep around the most recent value of the input and result. There are various reasons for this decision, but it satisfies the primary use case for memoizing in a React context.

So for React's memoization it's more like this:

```
let prevInput, prevResult
function addTwo(input) {
  if (input !== prevInput) {
    prevResult = input + 2
  }
  prevInput = input return prevResult
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
