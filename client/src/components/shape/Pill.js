import React from "react";

import { PillProps } from "../../utils/type";

function Pill(props) {
  return <div className={props.className}>{props.children}</div>;
}

Pill.propTypes = PillProps;
export default React.memo(Pill);
