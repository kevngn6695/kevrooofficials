import React from "react";

import { WrapperProps } from "../utils/type";

import "../assets/style/sass/components/wrapper.sass";

function Wrapper(props) {
  return (
    <div
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseMove={props.onMouseMove}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </div>
  );
}

Wrapper.propTypes = WrapperProps;

export default React.memo(Wrapper);
