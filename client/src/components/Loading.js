import React from "react";

import { LoadingProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/loading.sass";

function Loading(props) {
  return <motion.div className={props.className}>Loading...</motion.div>;
}

Loading.propTypes = LoadingProps;

export default React.memo(Loading);
