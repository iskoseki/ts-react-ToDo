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
  const buttonStyle = task
    ? { justifyContent: "center", alignContent: "center" }
    : { justifyContent: "center", alignContent: "center" };

  return (
    <>
      <main>
        <div className="nav">
          <h1>TS + React</h1>
          <p>"a minimalist To do app"</p>
        </div>

        <section>
          <TaskDisplay id={1} name={inputValue} />
          <h2 className="write">
            {task.length ? "Let's work" : "Write something"}
          </h2>
          <ul>
            <div style={buttonStyle}></div>
            {task.map((text) => (
              <li key={text}>{text}</li>
            ))}{" "}
          </ul>
        </section>

        <div className="container">
          <label htmlFor="input-text">Type:</label>
          <input
            id="input-text"
            type="text"
            className="inputTask"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          />
          <button onClick={handleButtonClick} className="btn">
            Enter
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
