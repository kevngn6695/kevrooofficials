import React from "react";

import { BlobProps } from "../../utils/type";

import "../../assets/style/sass/components/blob.sass";

function Blob(props) {
  return (
    <svg
      className={props.className}
      viewBox={props.viewBox}
      xmlns={props.xmlns}
    >
      {props.children}
      <path fill={props.fill} d={props.d} className="blob" />
    </svg>
  );
}

Blob.propTypes = BlobProps;

export default React.memo(Blob);
