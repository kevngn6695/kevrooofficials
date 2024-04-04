import React from "react";

import { TooltipProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/tooltip.sass";

function Tooltip(props) {
  return <motion.div className={props.className}>{props.children}</motion.div>;
}

Tooltip.propTypes = TooltipProps;

export default React.memo(Tooltip);
