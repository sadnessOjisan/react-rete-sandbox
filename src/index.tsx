import * as React from "react";
import { render } from "react-dom";
import init from "./editor";

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div style={{ textAlign: "left", width: "100vw", height: "70vh" }}>
        <div ref={(el) => init(el)} />
      </div>
    </div>
  );
};

render(<App></App>, document.body);
