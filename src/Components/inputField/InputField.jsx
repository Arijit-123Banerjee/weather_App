// Components/inputField/InputField.js
import React from "react";

const InputField = ({ inputData, handleOnchange, handleOnSubmit }) => {
  return (
    <div className="lg:absolute lg:top-0 lg:right-0 lg:p-10">
      <input
        type="text"
        value={inputData}
        onChange={handleOnchange}
        className="border-2 border-gray-400 p-2"
      />
      <button
        onClick={handleOnSubmit}
        className="ml-2 p-2 bg-blue-500 text-white"
      >
        Submit
      </button>
    </div>
  );
};

export default InputField;
