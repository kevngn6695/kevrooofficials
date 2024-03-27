import React from "react";

import { SymbolProps } from "../utils/type";

import "../assets/style/sass/components/symbol.sass";

function Symbol(props) {
  if (props.type === "menu") {
    return (
      <>
        <div className={props.className}></div>
        <div className={props.className}></div>
        <div className={props.className}></div>
      </>
    );
  } else {
    return <img className={props.className} src={props.src} alt={props.alt} />;
  }
}

Symbol.propTypes = SymbolProps;

export default Symbol;
