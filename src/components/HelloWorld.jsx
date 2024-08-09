import { h } from "preact";
import { useState } from "preact/hooks";

export function HelloWorld({ initialName = "World" }) {
  const [name, setName] = useState(initialName);
  const [count, setCount] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter a name"
      />
      <p>You clicked {count} times</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
