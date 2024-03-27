import React from "react";

import { LineProps } from "../../utils/type";

import "../assets/style/sass/components/line.sass";

function Line(props) {
  return <div className={props.className}>{props.children}</div>;
}

Line.propTypes = LineProps;

export default React.memo(Line);
