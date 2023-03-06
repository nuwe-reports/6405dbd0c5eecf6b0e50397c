import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>React counter challenge solution - NUWE</h1>
      <div>
        <button data-testid="incrementButton" onClick={increment}>
          +
        </button>
        <button data-testid="decrementButton" onClick={decrement}>
          -
        </button>
      </div>
      <div>
        <h2 data-testid="countLabel">{count}</h2>
      </div>
    </div>
  );
}

export default App;
