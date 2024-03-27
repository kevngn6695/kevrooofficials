import React from "react";

import { LoadingProps } from "../utils/type";

import "../assets/style/sass/components/loading.sass";

function Loading(props) {
  return <div className={props.className}>Loading...</div>;
}

Loading.propTypes = LoadingProps;

export default React.memo(Loading);
