import React from "react";

import { WrapperProps } from "../utils/type";
import { motion } from "framer-motion";
import "../assets/style/sass/components/wrapper.sass";

function Wrapper(props) {
  return (
    <motion.div
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseMove={props.onMouseMove}
      onMouseLeave={props.onMouseLeave}
      {...props}
    >
      {props.children}
    </motion.div>
  );
}

Wrapper.propTypes = WrapperProps;

export default React.memo(Wrapper);
