import React from "react";

import { TextFieldProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/textfield.sass";

function TextField(props) {
  return (
    <motion.form className={props.classNameForm} onSubmit={props.onSubmit}>
      <motion.label
        className={props.classNameLabel}
        for={props.name}
        name={props.name}
      >
        {props.text}
      </motion.label>
      <motion.textarea
        className={props.classNameTextArea}
        id={props.id}
        name={props.name}
      ></motion.textarea>
    </motion.form>
  );
}

TextField.propTypes = TextFieldProps;

export default React.memo(TextField);
