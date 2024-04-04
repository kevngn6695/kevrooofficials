import React from "react";

import { LinkProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/link.sass";

function Link(props) {
  return (
    <motion.a className={props.className} href={props.href} title={props.title}>
      {props.children}
    </motion.a>
  );
}

Link.propTypes = LinkProps;

export default React.memo(Link);
