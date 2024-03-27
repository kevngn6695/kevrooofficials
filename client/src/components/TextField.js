import React from "react";

import { TextFieldProps } from "../utils/type";

import "../assets/style/sass/components/textfield.sass";

function TextField(props) {
  return (
    <form className={props.classNameForm} onSubmit={props.onSubmit}>
      <label
        className={props.classNameLabel}
        for={props.name}
        name={props.name}
      >
        {props.text}
      </label>
      <textarea
        className={props.classNameTextArea}
        id={props.id}
        name={props.name}
      ></textarea>
    </form>
  );
}

TextField.propTypes = TextFieldProps;

export default React.memo(TextField);
