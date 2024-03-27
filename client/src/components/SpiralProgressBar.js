import React from "react";

import { SpiralProgressBarProps } from "../utils/type";

import "../assets/style/sass/components/spiralprogressbar.sass";

function SpiralProgressBar(props) {
  return <div className={props.className}>SpiralProgressBar</div>;
}

SpiralProgressBar.propTypes = SpiralProgressBarProps;

export default React.memo(SpiralProgressBar);
