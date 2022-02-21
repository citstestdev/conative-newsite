import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Con() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  // console.log("fdsfdsfd",inputValue);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}


export default Con;