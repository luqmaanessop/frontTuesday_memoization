import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='pl-6 text-left'>
        <h1 className='mt-2 text-xl font-bold text-left'>Memoization</h1>
        <p>
        React has three APIs for memoization: memo, useMemo, and useCallback. The caching strategy React has adopted has a size of 1. That is, they only keep around the most recent value of the input and result. There are various reasons for this decision, but it satisfies the primary use case for memoizing in a React context.
        </p>
      </div>
    </div>
  );
}

export default App;
