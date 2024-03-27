import React from "react";

import { CircleProps } from "../../utils/type";

function Circle(props) {
  return <div className={props.className}>{props.children}</div>;
}

Circle.propTypes = CircleProps;

export default React.memo(Circle);
