import React from "react";
import "../Form/Input.css"

const Input = ({ type, onChange, value, name }) => (
  <input type={type} onChange={onChange} value={value} name={name} />
);

export default Input;
