import React from "react";

import { TooltipProps } from "../utils/type";

import "../assets/style/sass/components/tooltip.sass";

function Tooltip(props) {
  return <div className={props.className}>{props.children}</div>;
}

Tooltip.propTypes = TooltipProps;

export default React.memo(Tooltip);
