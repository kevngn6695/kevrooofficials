import React from "react";

import { VideoProps } from "../utils/type";

function Video(props) {
  return (
    <>
      <video controls autoplay loop>
        <source src={props.src} type={props.type} />
      </video>
    </>
  );
}

Video.propTypes = VideoProps;

export default React.memo(Video);
