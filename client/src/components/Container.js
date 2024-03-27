import React from "react";

import { ContainerProps } from "../utils/type";

import "../assets/style/sass/components/container.sass";

function Container(props) {
  return (
    <section
      className={props.className}
      onMouseMove={props.onMouseMove}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </section>
  );
}

Container.propTypes = ContainerProps;

export default React.memo(Container);
