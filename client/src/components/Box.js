import React from "react";

import { motion } from "framer-motion";

import "../assets/style/sass/components/box.sass";

function Box(props) {
  return <motion.div className={props.className}>{props.children}</motion.div>;
}

export default React.memo(Box);
