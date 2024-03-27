import React from "react";

import { ImageProps } from "../utils/type";

import "../assets/style/sass/components/image.sass";

function Image(props) {
  return (
    <img
      className={props.className}
      src={props.src}
      alt={props.alt}
      style={props.style}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseMove={props.onMouseMove}
    />
  );
}

Image.propTypes = ImageProps;

export default React.memo(Image);
