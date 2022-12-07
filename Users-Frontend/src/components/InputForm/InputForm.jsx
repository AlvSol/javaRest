import React from "react";
import "./InputForm.scss";

function InputForm(props) {
  return (
    <div className="input-wrapper">
      <label className="label">{props.name}</label>
      <input
        className="input-form"
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.name}
      />
    </div>
  );
}

export default InputForm;
