import React from "react";

import { ProgressBarProps } from "../utils/type";

import "../assets/style/sass/components/progressbar.sass";

function ProgressBar(props) {
  return <div className={props.className}>{props.children}</div>;
}

ProgressBar.propTypes = ProgressBarProps;

export default React.memo(ProgressBar);
