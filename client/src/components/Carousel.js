import React from "react";

import { CarouselProps } from "../utils/type";

import "../assets/style/sass/components/carousel.sass";

function Carousel(props) {
  return <div className={props.className}>{props.children}</div>;
}

Carousel.propTypes = CarouselProps;

export default React.memo(Carousel);
