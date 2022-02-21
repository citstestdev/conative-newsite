import { useState } from "react";
import CustomPopup from "./CustomPopup";
// import "./styles.css";
 
export default function App() {
  const [visibility, setVisibility] = useState(false);
 
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
 
  return (
    <div className="App">
      <button  style={{
      }} onClick={(e) => setVisibility(!visibility)}>Toggle Popup</button>
 
      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Hello"
      >
        <h1>Hello This is Popup Content Area</h1>
        <h2>This is my lorem ipsum text here!</h2>
      </CustomPopup>
    </div>
  );
}
 