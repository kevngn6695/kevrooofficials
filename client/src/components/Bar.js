import React from "react";

import { BarProps } from "../utils/type";

import "../assets/style/sass/components/bar.sass";
import SpiralProgressBar from "./SpiralProgressBar";

function Bar(props) {
  return (
    <SpiralProgressBar
      size={props.size}
      progress={props.value}
      strokeWidth={props.thickness}
    />
  );
}

Bar.propTypes = BarProps;

export default React.memo(Bar);
