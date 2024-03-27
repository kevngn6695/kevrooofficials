import React from "react";

import { ButtonProps } from "../utils/type";

import "../assets/style/sass/components/button.sass";

function Button(props) {
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = ButtonProps;

export default React.memo(Button);
