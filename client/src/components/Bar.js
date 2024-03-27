import React from "react";

import { BarProps } from "../utils/type";

import "../assets/style/sass/components/bar.sass";

function Bar(props) {
  return <div className={props.className}>{props.children}</div>;
}

Bar.propTypes = BarProps;

export default React.memo(Bar);
