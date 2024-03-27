import React from "react";

import Container from "../components/Container";

import { WorkProps } from "../utils/type";

import "../assets/style/sass/pages/work.sass";

function Work(props) {
  return <Container className={props.className}>Work</Container>;
}

Work.propTypes = WorkProps;

export default React.memo(Work);
