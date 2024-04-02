import React, { useState, useEffect } from "react";

import Container from "../components/Container";
import Image from "../components/Image";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Link from "../components/Link";
import Symbol from "../components/Symbol";
import Heading from "../components/Heading";
import Wrapper from "../components/Wrapper";
import Blob from "../components/shape/Blob";
import Footer from "../components/Footer";

import KevSignature from "../assets/media/images/images/Kev.gif";
import KevImage1 from "../assets/media/images/images/profile-1.jpg";

import FacebookIcon from "../assets/media/images/icons/facebook-icon/facebook-icon-50.png";
import InstagramIcon from "../assets/media/images/icons/instagram-icon/instagram-icon-50.png";
import TwitterIcon from "../assets/media/images/icons/twitter-icon/twitter-icon-50.png";
import TikTokIcon from "../assets/media/images/icons/tiktok-icon/tiktok-icon-50.png";
import LinkedinIcon from "../assets/media/images/icons/linkedin-icon/linkedin-icon-50.png";

import { AboutProps } from "../utils/type";

import "../assets/style/sass/pages/about.sass";

function About(props) {
  const newDate = new Date();

  // const [position, setPosition] = useState({ x: 0, y: 0 });
  const [date, setDate] = useState(newDate); // Initialize the state for date

  const currentYear = date.getFullYear();

  const socialMedia = [
    { icon: FacebookIcon, text: "facebook", href: "" },
    { icon: InstagramIcon, text: "instagram", href: "" },
    { icon: TwitterIcon, text: "twitter", href: "" },
    { icon: TikTokIcon, text: "tiktok", href: "" },
    { icon: LinkedinIcon, text: "linkedin", href: "" },
  ];

  // Effect hook for updating date and time continuously
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 100);
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <Container className={props.className}>
      <Blob
        className="blob-container"
        viewBox="-10 0 130 100"
        fill="#FFFFFF"
        d="M41.6,-62.8C55.7,-63.9,70,-56.3,77.7,-44.4C85.3,-32.5,86.1,-16.2,81.4,-2.7C76.8,10.9,66.6,21.7,57.5,31C48.4,40.3,40.3,48.1,30.9,57.5C21.5,66.8,10.8,77.7,-2.3,81.6C-15.3,85.6,-30.6,82.5,-37.1,71.5C-43.7,60.5,-41.5,41.6,-50,28.4C-58.5,15.1,-77.8,7.6,-84.1,-3.7C-90.4,-14.9,-83.8,-29.7,-71.8,-36.8C-59.7,-43.9,-42.1,-43.1,-29.2,-42.7C-16.3,-42.2,-8.2,-41.9,2.8,-46.8C13.8,-51.6,27.5,-61.6,41.6,-62.8Z"
      />
      <Button className="about-closed-btn" type="button" />
      <Container className="about-title-container">
        <Wrapper className="about-img-wrapper">
          <Image className="about-signature-img" src={KevSignature} />
        </Wrapper>
        <Wrapper className="about-title-wrapper">
          <Heading className="about-title-heading" h2>
            Frontend React Developer
          </Heading>
          <Paragraph className="about-title-paragraph">
            Design and art are the vibrant pulse of creativity, weaving together
            the threads of imagination and innovation to breathe life into every
            corner of existence.
          </Paragraph>
        </Wrapper>
        <Container className="about-info-container">
          <Wrapper className="about-email-wrapper">
            <Link className="about-email-link">kevngn6695@gmail.com</Link>
          </Wrapper>
          <Wrapper className="about-social-media-wrapper">
            {socialMedia.map((social) => (
              <Link
                className={`social-media-link ${social.text}`}
                href={social.href}
              >
                <Symbol className={`${social.text}-symbol`} src={social.icon} />
              </Link>
            ))}
          </Wrapper>
        </Container>
      </Container>
      <Container className="about-img-container">
        <Image className="about-img" src={KevImage1} />
      </Container>
      <Footer className="footer about" currentYear={currentYear} />
    </Container>
  );
}

About.propTypes = AboutProps;

export default React.memo(About);
