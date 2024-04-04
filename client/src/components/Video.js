import React from "react";

import { VideoProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/video.sass";

function Video(props) {
  return (
    <>
      <motion.video controls autoplay loop>
        <source src={props.src} type={props.type} />
      </motion.video>
    </>
  );
}

Video.propTypes = VideoProps;

export default React.memo(Video);
