import { useState } from "react";
import "./App.css";
const CONTENT = [
  { title: "What is your name? ", details: "My name is Monisha" },
  { title: "What is your age? ", details: "My age is 32" },
  { title: "Where do you stay? ", details: "I stay in Singapore" },
];

function App() {
  const [toggle, setToggle] = useState(null);
  const onClickHandler = (i) => {
    if (toggle === i) {
      //double on the title should make toggle as null
      console.log("inside toggle function");
      setToggle(null);
      return;
    }
    setToggle(i);
    console.log("inside toggle function" + i);
  };
  return (
    <div className="App">
      <div className="accordion">
        {CONTENT.map((data, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => onClickHandler(i)}>
              <span>{data.title}</span>
              <span className="plus">{toggle === i ? "-" : "+"}</span>
            </div>
            <div className={toggle === i ? "content show" : "content"}>
              <div>{data.details}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
