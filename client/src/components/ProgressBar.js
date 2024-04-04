import React from "react";

import { ProgressBarProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/progressbar.sass";

function ProgressBar(props) {
  return <motion.div className={props.className}>{props.children}</motion.div>;
}

ProgressBar.propTypes = ProgressBarProps;

export default React.memo(ProgressBar);
