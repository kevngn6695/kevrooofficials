import React from "react";

import { SpiralProgressBarProps } from "../utils/type";

import "../assets/style/sass/components/spiralprogressbar.sass";

function SpiralProgressBar(props) {
  const radius = (props.size - props.strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (props.progress / 100) * circumference;
  return (
    <svg
      className="circular-progress"
      width={props.size}
      height={props.size}
      viewBox={`0 0 ${props.size} ${props.size}`}
    >
      <circle
        className="background"
        cx={props.size / 2}
        cy={props.size / 2}
        r={radius}
        strokeWidth={props.strokeWidth}
      />
      <circle
        className="progress"
        cx={props.size / 2}
        cy={props.size / 2}
        r={radius}
        strokeWidth={props.strokeWidth}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: offset,
        }}
      />
    </svg>
  );
}

SpiralProgressBar.defaultProps = {
  size: 100,
  progress: 0,
  strokeWidth: 10,
};
SpiralProgressBar.propTypes = SpiralProgressBarProps;

export default React.memo(SpiralProgressBar);
