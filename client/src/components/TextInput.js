import React from "react";

import { TextInputProps, TextInputDefaultProps } from "../utils/type";
import "../assets/style/sass/components/textinput.sass";

function TextInput(props) {
  return (
    <form className={props.classNameForm} onSubmit={props.onSubmit}>
      {props.inputLists.map((input) => (
        <div className={props.classNameLabelInput}>
          <label
            className={`${props.classNameLabel}`}
            for={input.id}
            name={input.id}
          >
            {input.text}
          </label>
          <input
            className={`${props.classNameInput}`}
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
          />
        </div>
      ))}
    </form>
  );
}

TextInput.propTypes = TextInputProps;
TextInput.defaultProps = TextInputDefaultProps;

export default React.memo(TextInput);
