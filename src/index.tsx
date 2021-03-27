import "regenerator-runtime/runtime.js";

import * as ReactDOM from "react-dom";
import { init } from "./editor";

export const App = () => {
  return (
    <div
      ref={(el) => init(el)}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
