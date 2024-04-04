import React from "react";

import { CarouselProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/carousel.sass";

function Carousel(props) {
  return <motion.div className={props.className}>{props.children}</motion.div>;
}

Carousel.propTypes = CarouselProps;

export default React.memo(Carousel);
