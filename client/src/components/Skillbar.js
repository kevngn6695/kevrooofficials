import React from "react";

import Card from "./Card";
import Circle from "./shape/Circle";
import Bar from "./Bar";
import Heading from "./Heading";
import Box from "./Box";

import { SkillbarProps } from "../utils/type";

import "../assets/style/sass/components/skillbar.sass";

function Skillbar(props) {
  return (
    <Card
      className={`${props.classNameCard} ${
        props.isMouseIn ? "open" : "closed"
      }`}
      key={props.key}
    >
      <Circle
        className={`${props.classNameCircle} ${
          props.isMouseIn ? "open" : "closed"
        }`}
      >
        <Bar
          className={`${props.classNameBar} ${
            props.isMouseIn ? "open" : "closed"
          }`}
          percent={props.percent}
          value={props.percent}
          size={props.size}
          thickness={props.thickness}
        />
        <Box className={`skillbar-box ${props.isMouseIn ? "open" : "closed"}`}>
          <Heading className={props.classNamePercent} h5>
            {props.percentage}
          </Heading>
        </Box>
      </Circle>
      <Heading
        className={`${props.classNameText} ${
          props.isMouseIn ? "open" : "closed"
        }`}
        h6
      >
        {props.skillName}
      </Heading>
    </Card>
  );
}

Skillbar.propTypes = SkillbarProps;

export default React.memo(Skillbar);
