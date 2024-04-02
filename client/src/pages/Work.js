import React from "react";

import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import { WorkProps } from "../utils/type";

import "../assets/style/sass/pages/work.sass";

function Work(props) {
  return (
    <Container className={props.className}>
      <Wrapper className={`work-wrapper`}></Wrapper>
    </Container>
  );
}

Work.propTypes = WorkProps;

export default React.memo(Work);
