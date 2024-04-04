import React from "react";

import { GraphProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/graph.sass";

function Graph(props) {
  return <motion.div className={props.className}>{props.children}</motion.div>;
}

Graph.propTypes = GraphProps;

export default React.memo(Graph);
