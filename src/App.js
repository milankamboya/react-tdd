import React from 'react';

function App() {
  const [counter, setCounter] = React.useState(0);

  const onDecrement = () => {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (
    <div>
      <h1>
        This is counter app
        <div id="counter-value">{counter}</div>
        <button id="increment-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
        <button id="decrement-btn" onClick={onDecrement}>Decrement</button>
      </h1>
    </div>
  );
}

export default App;
