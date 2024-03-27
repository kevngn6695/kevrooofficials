import React from "react";

import { GraphProps } from "../utils/type";

import "../assets/style/sass/components/graph.sass";

function Graph(props) {
  return <div className={props.className}>{props.children}</div>;
}

Graph.propTypes = GraphProps;

export default React.memo(Graph);
