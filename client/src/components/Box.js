import React from "react";

import "../assets/style/sass/components/box.sass";

function Box(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default React.memo(Box);
