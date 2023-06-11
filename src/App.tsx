import { useState, useRef } from "react";
import "./App.css";
import { TaskDisplay } from "./components/taskList";

function App() {
  const [task, setTask] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    console.log(inputRef.current?.value);
    // access input value using ref
    setTask([...task, inputValue]);
    setInputValue(""); // clear input value
  };
  return (
    <>
      <div>
        <h1>TS + React</h1>
        <p>"a minimalist To do app"</p>
      </div>
      <TaskDisplay id={1} name={inputValue} />

      <div>
        <label htmlFor="input-text">→ </label>
        <input
          id="input-text"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
        />
        <button onClick={handleButtonClick}>Enter</button>
      </div>

      <ul>
        {task.map((text) => (
          <li key={text}>{text}</li>
        ))}{" "}
      </ul>
    </>
  );
}

export default App;
