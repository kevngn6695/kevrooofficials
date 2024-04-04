import React from "react";

import { CardProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/card.sass";

function Card(props) {
  return (
    <motion.div
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      style={props.style}
    >
      {props.children}
    </motion.div>
  );
}

CardProps.propTypes = CardProps;

export default React.memo(Card);
