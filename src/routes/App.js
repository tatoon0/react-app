import Button from "../components/Button"
import React, {useEffect, useState} from 'react';

function CountNumber({count}) {
  useEffect(() => {
    console.log("created");
    return () => {
      console.log("destroyed");
    }
  })
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

function App() {
  const [showing, setShowing] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const countUp = () => setCount((current) => current + 1);
  const onChange = (e) => setText(e.target.value);
  const toggle = () => setShowing((current) => !current);
  console.log("run every time");
  useEffect(() => {
    console.log("run only once");
  }, []);
  useEffect(() => {
    console.log("run when count changes");
  }, [count]);
  useEffect(() => {
    console.log("run when text changes");
  }, [text]);
  return (
    <div>
      <input value={text} onChange={onChange}></input>
      {showing ? <CountNumber count={count} /> : null}
      <div>
        <button onClick={countUp}>click me</button>
        <button onClick={toggle}>{showing ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}

export default App;