import React from "react";

import Container from "./Container";
import Heading from "./Heading";
import Link from "./Link";
import Symbol from "./Symbol";

import FacebookIcon from "../assets/media/images/icons/facebook-icon/facebook-icon-50.png";
import InstagramIcon from "../assets/media/images/icons/instagram-icon/instagram-icon-50.png";
import TwitterIcon from "../assets/media/images/icons/twitter-icon/twitter-icon-50.png";
import TikTokIcon from "../assets/media/images/icons/tiktok-icon/tiktok-icon-50.png";
import LinkedinIcon from "../assets/media/images/icons/linkedin-icon/linkedin-icon-50.png";

import { InfoProps } from "../utils/type";

import "../assets/style/sass/components/info.sass";

function Info(props) {
  const socialMedia = [
    { url: FacebookIcon, text: "facebook" },
    { url: InstagramIcon, text: "instagram" },
    { url: TwitterIcon, text: "twitter" },
    { url: TikTokIcon, text: "tiktok" },
    { url: LinkedinIcon, text: "linkedin" },
  ];
  return (
    <Container className={props.className}>
      <Heading className="">Kevroo Nguyen</Heading>
      <Heading className="">Frontend Developer</Heading>
      <Link>kevngn6695@gmail.com</Link>
      <Container>
        {socialMedia.map((social) => (
          <Link className={`social-media-link ${social.text}`}>
            <Symbol className={`${social.text}-symbol`} src={social.url} />
          </Link>
        ))}
      </Container>
    </Container>
  );
}

Info.propTypes = InfoProps;

export default React.memo(Info);
