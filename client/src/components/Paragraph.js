import React from "react";

import { ParagraphProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/paragraph.sass";

function Paragraph(props) {
  return (
    <motion.p className={props.className} {...props}>
      {props.children}
    </motion.p>
  );
}

Paragraph.propTypes = ParagraphProps;

export default React.memo(Paragraph);
