import React from "react";
import Calculator from "./components/context/Calculator";
import { GlobalStorage } from "./components/context/MyContext";

const App = () => {
  return (
    <div>
      <GlobalStorage>
        <Calculator />
      </GlobalStorage>
    </div>
  );
};

export default App;
