import React from "react";
import { CardProps } from "../utils/type";
import "../assets/style/sass/components/card.sass";

function Card(props) {
  return <div className={props.className}>{props.children}</div>;
}

CardProps.propTypes = CardProps;

export default React.memo(Card);
