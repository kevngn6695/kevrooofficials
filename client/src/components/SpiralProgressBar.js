import React, { useState, useEffect } from "react";

import { SpiralProgressBarProps } from "../utils/type";

import "../assets/style/sass/components/spiralprogressbar.sass";

function SpiralProgressBar(props) {
  const [progress, setProgress] = useState(0);
  const radius = (props.size - props.strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  // Update progress when props.progress changes
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Increment progress gradually until it reaches props.progress
        const newProgress = prevProgress + 1;
        return newProgress <= props.progress ? newProgress : props.progress;
      });
    }, 10); // Adjust the interval for smoother animation

    return () => clearInterval(interval);
  }, [props.progress]);
  return (
    <svg
      className={`circular-progress ${props.isMouseIn ? "open" : "closed"}`}
      width={props.size}
      height={props.size}
      viewBox={`0 0 ${props.size} ${props.size}`}
    >
      <circle
        className={`background ${props.isMouseIn ? "open" : "closed"}`}
        cx={props.size / 2}
        cy={props.size / 2}
        r={radius}
        strokeWidth={props.strokeWidth}
      />
      <circle
        className={`progress ${props.isMouseIn ? "open" : "closed"}`}
        cx={props.size / 2}
        cy={props.size / 2}
        r={radius}
        strokeWidth={props.strokeWidth}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: offset,
          transition: "stroke-dashoffset 0.5s ease",
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
