import React from "react";

import { ParagraphProps } from "../utils/type";

import "../assets/style/sass/components/paragraph.sass";

function Paragraph(props) {
  return <p className={props.className}>{props.children}</p>;
}

Paragraph.propTypes = ParagraphProps;

export default React.memo(Paragraph);
