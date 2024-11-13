import React, {useState} from "react";

import typeSound from '../../assets/audio/type.mp3'

function Input({ id, label, type = "text", name, children }) {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value)
    const audio = new Audio(typeSound); 
    audio.play();
  }


  return (
    <div className="input">
      <input
        id={id}
        type={type}
        value={inputValue}
        name={name}
        onChange={handleChange}
        className="input__element"
      />
      {label && (
       <label htmlFor={id} className={`input__label ${inputValue ? "input__label--active" : ""}`}>
       {label}
   </label>
      )}
      {children}
    </div>
  );
}

export default Input;