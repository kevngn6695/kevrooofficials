import React, { useState } from "react";

import Card from "./Card";
import Circle from "./shape/Circle";
import Bar from "./Bar";
import Heading from "./Heading";
import Box from "./Box";

import { SkillbarProps } from "../utils/type";

import "../assets/style/sass/components/skillbar.sass";

function Skillbar(props) {
  const [isMouseIn, setIsMouseIn] = useState(false);

  const handleDetectMouseIn = () => {
    setIsMouseIn(true);
  };

  const handleDetectMouseOut = () => {
    setIsMouseIn(false);
  };

  return (
    <Card
      className={`${props.classNameCard}`}
      onMouseEnter={handleDetectMouseIn}
      onMouseLeave={handleDetectMouseOut}
      key={props.key}
      style={{
        height: `${props.percent + 50}px`,
        top: `calc(${props.percent}px + 70%)`,
        marginLeft: `${props.percent}px`,
      }}
    >
      <Circle className={`${props.classNameCircle}`}>
        <Bar
          className={`${props.classNameBar} ${isMouseIn ? "open" : "closed"}`}
          value={props.percent}
          size={props.size}
          isMouseIn={isMouseIn}
          thickness={props.thickness}
        />
        <Box className={`skillbar-box ${isMouseIn ? "open" : "closed"}`}>
          <Heading className={`${props.classNamePercent}`} h5>
            {props.percentage}
          </Heading>
        </Box>
      </Circle>
      <Heading
        className={`${props.classNameText} ${isMouseIn ? "open" : "closed"}`}
        h6
      >
        {props.skillName}
      </Heading>
    </Card>
  );
}

Skillbar.propTypes = SkillbarProps;

export default React.memo(Skillbar);
