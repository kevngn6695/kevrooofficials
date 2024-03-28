import React, { useState } from "react";

import Card from "./Card";
import Circle from "./shape/Circle";
import Bar from "./Bar";
import Heading from "./Heading";
import Box from "./Box";

import { SkillbarProps } from "../utils/type";

import "../assets/style/sass/components/skillbar.sass";

function Skillbar(props) {
  return (
    <Card className={props.classNameCard} key={props.key}>
      <Circle className={props.classNameCircle}>
        <Bar
          className={props.classNameBar}
          percent={props.percent}
          variant="determinate"
          value={props.percent}
          size={props.size}
          thickness={props.thickness}
        />
        <Box className="skillbar-box">
          {/* <CircularProgress /> */}
          <Heading className={props.classNamePercent} h5>
            {props.percentage}
          </Heading>
        </Box>
      </Circle>
      <Heading className={props.classNameText} h6>
        {props.skillName}
      </Heading>
    </Card>
  );
}

Skillbar.propTypes = SkillbarProps;

export default React.memo(Skillbar);
