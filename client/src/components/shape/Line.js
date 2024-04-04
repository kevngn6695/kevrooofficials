import React from "react";

import { LineProps } from "../../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/line.sass";

function Line(props) {
  return <motion.div className={props.className}>{props.children}</motion.div>;
}

Line.propTypes = LineProps;

export default React.memo(Line);
