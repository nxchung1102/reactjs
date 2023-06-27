import React from "react";
//import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import Lab1 from "./Lab1";

//rsfp

function App() {
  // const name = "chung";
  // const age = 21;
  // const isMale = true;
  // const student = {
  //   name: "Easy frontend",
  //   price: 20,
  // };
  // const colorList = ["red", "green", "blue"];

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Xuan Chung</p>
        <p>
          hello {name} - {age}- {isMale ? "Male" : "Female"}
        </p>
        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}

        {!isMale && <p>Female</p>}                   1    */}

      {/* { {isMale && (
          <p>Male</p>
          <p>Male</p>
          <p>Male</p>
        )} } => error because only 1 parent element; */}

      {/* fix  => wrapped into a div tag*/}

      {/* {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}                                           2   */}

      {/* or */}

      {/* {isMale && (
          <React.Fragment>
            <p>Male 4</p>
            <p>Male 5</p>
            <p>Male 6</p>
          </React.Fragment>
        )}                                           3    */}

      {/* or */}

      {/* {isMale && (
          <>
            <p>Male 7</p>
            <p>Male 8</p>
            <p>Male 9</p>
          </>
        )}
        <p>{student.name}</p>

        <ul>
          {colorList.map((color) => (
            <li key={color} style={{ color }}>
              {color}
            </li>
          ))}
        </ul>
      </header>                                      4   */}

      {/* <AlbumFeature /> */}

      {/* <TodoFeature /> */}
      <Lab1 />
    </div>
  );
}

export default App;
