import React, { useState } from "react";
import InputField from "./Components/inputField/InputField";
import Card from "./Components/Card/Card";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [getInputData, setGetInputData] = useState("");

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const handleOnSubmit = () => {
    setGetInputData(inputData);
    setInputData("");
  };

  return (
    <div className="h-screen w-full bg-gray-800 flex justify-center items-center flex-col space-y-10">
      <h1 className="text-white absolute top-0 p-20 text-5xl font-light">
        WeatherBug
      </h1>
      <InputField
        inputData={inputData}
        handleOnchange={handleInput}
        handleOnSubmit={handleOnSubmit}
      />
      <Card getInputData={getInputData} />
    </div>
  );
};

export default App;
