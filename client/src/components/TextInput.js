import React from "react";

import { TextInputProps, TextInputDefaultProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/textinput.sass";

function TextInput(props) {
  return (
    <motion.form className={props.classNameForm} onSubmit={props.onSubmit}>
      {props.inputLists.map((input) => (
        <motion.div className={props.classNameLabelInput}>
          <motion.label
            className={`${props.classNameLabel}`}
            for={input.id}
            name={input.id}
          >
            {input.text}
          </motion.label>
          <motion.input
            className={`${props.classNameInput}`}
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
          />
        </motion.div>
      ))}
    </motion.form>
  );
}

TextInput.propTypes = TextInputProps;
TextInput.defaultProps = TextInputDefaultProps;

export default React.memo(TextInput);
