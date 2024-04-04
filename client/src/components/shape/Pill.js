import React from "react";

import { PillProps } from "../../utils/type";
import { motion } from "framer-motion";

import "../../assets/style/sass/components/pill.sass";

function Pill(props) {
  return <motion.div className={props.className}>{props.children}</motion.div>;
}

Pill.propTypes = PillProps;
export default React.memo(Pill);
