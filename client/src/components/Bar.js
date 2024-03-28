import React from "react";

import CircularProgress from "@mui/material/CircularProgress";

import { BarProps } from "../utils/type";

import "../assets/style/sass/components/bar.sass";

function Bar(props) {
  return <CircularProgress {...props} />;
}

Bar.propTypes = BarProps;

export default React.memo(Bar);
