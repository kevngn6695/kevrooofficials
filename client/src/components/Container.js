import React from "react";

import { ContainerProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/container.sass";

function Container(props) {
  return (
    <motion.section
      className={props.className}
      onMouseMove={props.onMouseMove}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </motion.section>
  );
}

Container.propTypes = ContainerProps;

export default React.memo(Container);
