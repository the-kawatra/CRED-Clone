import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div
      className={`flex absolute-center button-wrapper ${props.customClass}`}
      onClick={props.onClick}
    >
      {props.prefix} {props.buttonText}
    </div>
  );
};

export default Button;
