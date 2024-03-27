import React from "react";

import { LinkProps } from "../utils/type";

import "../assets/style/sass/components/link.sass";

function Link(props) {
  return (
    <a className={props.className} href={props.href} title={props.title}>
      {props.children}
    </a>
  );
}

Link.propTypes = LinkProps;

export default React.memo(Link);
