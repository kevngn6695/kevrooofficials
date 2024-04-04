import React from "react";

import { ButtonProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/button.sass";

function Button(props) {
  return (
    <motion.button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
}

Button.propTypes = ButtonProps;

export default React.memo(Button);
