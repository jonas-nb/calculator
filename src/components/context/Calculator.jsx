import React, { useContext, useState } from "react";
import { MyContext } from "./MyContext";

const Calculator = () => {
  const { nome } = useContext(MyContext);
  const [resultado, setResultado] = useState();
  console.log(nome);

  return (
    <div className="">
      <div className="m-auto w-full h-screen border border-lime-400 rounded-3xl bg-gray-200/10">
        {/*painel*/}
        <div className="border border-red-700 m-5 h-48">{resultado}</div>
        {/*opções*/}
        <div></div>
        {/*numeros*/}
        <div>
          <button>1</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
