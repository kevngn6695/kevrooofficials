"use client";
import React, { useState, useEffect } from "react";

import Heading from "../components/Heading";
import Image from "../components/Image";
import Container from "../components/Container";
// import Info from "../components/Info";
// import TextInput from "../components/TextInput";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skillbar from "../components/Skillbar";
import Wrapper from "../components/Wrapper";
import Paragraph from "../components/Paragraph";
import Loading from "../components/Loading";
import Button from "../components/Button";

// import Work from "./Work";
import ProfileImage from "../assets/media/images/images/kev-cropped-img.png";
import ProfileImage1 from "../assets/media/images/images/kev-cropped-img-black.png";

import HomeIcon from "../assets/media/images/icons/home-icon/home-icon-512.png";
import HomeIconBlack from "../assets/media/images/icons/home-icon-black/home-icon-512-black.png";
import AboutIcon from "../assets/media/images/icons/user-icon/user-icon-96.png";
import AboutIconBlack from "../assets/media/images/icons/user-icon-black/user-icon-96-black.png";
import ContactIcon from "../assets/media/images/icons/phone-icon/phone-icon-100.png";
import ContactIconBlack from "../assets/media/images/icons/phone-icon-black/phone-icon-100-black.png";

// import { motion } from "framer-motion";
import { convertKtoF, useMousePosition } from "../utils/tools";
import { HomeProps } from "../utils/type";
import { fetchWeatherAPI } from "../utils/fetch";

import "../assets/style/sass/pages/home.sass";

function Home(props) {
  // Initialize size of each area in a bento box layout
  // Data for Skillbars
  const skillbars = [
    {
      classNameCard: "html",
      classNameCircle: "html",
      classNameBar: "html",
      classNamePercent: "html",
      percentage: "0%",
      classNameText: "html",
      skillName: "HTML",
    },
    {
      classNameCard: "css",
      classNameCircle: "css",
      classNameBar: "css",
      classNamePercent: "css",
      percentage: "0%",
      classNameText: "css",
      skillName: "CSS",
    },
    {
      classNameCard: "js",
      classNameCircle: "js",
      classNameBar: "js",
      classNamePercent: "js",
      percentage: "12%",
      classNameText: "js",
      skillName: "Javascript",
    },
    {
      classNameCard: "react",
      classNameCircle: "react",
      classNameBar: "react",
      classNamePercent: "react",
      percentage: "0%",
      classNameText: "react",
      skillName: "React",
    },
  ];
  // Initialize weekday and time objects
  const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const optionTime = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const optionDate = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // Create a new instance for date and time
  const newDate = new Date();
  const newTime = new Date().toLocaleTimeString([], optionTime);

  // State for managing application data
  const [date, setDate] = useState(newDate); // Initialize the state for date
  const [time, setTime] = useState(newTime); // Initialize the state for time
  const [weatherData, setWeatherData] = useState(null);
  const [isMouseIn, setIsMouseIn] = useState(false);

  // Create a weekday
  const dateStr = date.toLocaleDateString([], optionDate);
  const currentYear = date.getFullYear();
  const dayIdx = date.getDay();
  const today = dayNames[dayIdx];

  // const inputLists = [
  //   {
  //     className: "email-input",
  //     type: "text",
  //     text: "Email Address",
  //     placeholder: "Email",
  //   },
  // ];

  const urlLink = [
    { url: "/", text: "home", icon: HomeIcon, hover: HomeIconBlack },
    { url: "/about", text: "about", icon: AboutIcon, hover: AboutIconBlack },
    {
      url: "/contact",
      text: "phone",
      icon: ContactIcon,
      hover: ContactIconBlack,
    },
  ];

  const handleDetectMouseIn = () => {
    setIsMouseIn(true);
  };

  const handleDetectMouseOut = () => {
    setIsMouseIn(false);
  };

  // Effect hook for updating date and time continuously
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
      setTime(new Date().toLocaleTimeString([], optionTime));
      fetchWeatherAPI(setWeatherData)
        .then((message) => {
          console.log(`Successfully Resolved: ${message}`);
        })
        .catch((error) => {
          console.error(`Error: ${error.message}`);
        });
    }, 100);
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <Container className="nav-bar-container">
        <Navbar
          urlLink={urlLink}
          className="navbar"
          classNameList="nav-list"
          classNameItem="nav-list-item"
          classNameLink="nav-list-link"
          classNameMenuBtn="nav-menu-btn"
          idList="nav-list-id"
        />
      </Container>

      <Container className={props.className}>
        <Container
          className="home-view-container"
          onMouseEnter={handleDetectMouseIn}
          onMouseLeave={handleDetectMouseOut}
        >
          <Wrapper className="today-info-wrapper">
            <Wrapper
              className={`today-wrapper greeting ${isMouseIn ? "in" : "out"}`}
            >
              <Heading
                className="today-greeting"
                h6
                children={`Good morning`}
              />
            </Wrapper>
            <Wrapper
              className={`today-wrapper full-date ${isMouseIn ? "in" : "out"}`}
            >
              <Heading
                className="today-weekday"
                h6
                children={`${today} ${dateStr}`}
              />
            </Wrapper>
            <Wrapper
              className={`today-wrapper temperature ${
                isMouseIn ? "in" : "out"
              }`}
            >
              {weatherData ? (
                <Heading
                  className="today-temperature"
                  h6
                  children={`${convertKtoF(
                    parseFloat(weatherData.main.temp)
                  )} °F`}
                />
              ) : (
                <Loading />
              )}
            </Wrapper>
            <Wrapper
              className={`today-wrapper full-time ${isMouseIn ? "in" : "out"}`}
            >
              <Heading className="today-time" h6 children={`${time}`} />
            </Wrapper>
          </Wrapper>
          <Wrapper className="main-info-wrapper">
            <Wrapper>
              <Image className="main-img" src={ProfileImage} alt="Profile" />
            </Wrapper>
            <Wrapper>
              <Image className="main-img" src={ProfileImage1} alt="Profile1" />
            </Wrapper>
            <Wrapper className="main-title-wrapper">
              <Heading className="main-title name" h1>
                Kevroo
              </Heading>
              <Heading
                className="main-title title"
                h1
                children={`UX/UI Designer, Frontend React Developer`}
              />
              <Paragraph className="main-paragraph">
                Crafting seamless digital experiences, one line of code at a
                time,
                <br /> to transform your vision into a captivating reality.
              </Paragraph>
              <Button className="show-btn resume" type="button">
                <span>Resume</span>
              </Button>
              <Button className="show-btn cover-letter" type="button">
                <span>Cover Letter</span>
              </Button>
            </Wrapper>
          </Wrapper>
          <Wrapper className="main-footer-wrapper">
            <Footer className="footer home" currentYear={currentYear} />
          </Wrapper>
        </Container>
        <Wrapper className="main-skillboard-wrapper">
          {skillbars.map((skillbar, index) => (
            <Skillbar
              key={index}
              classNameCard={`card ${skillbar.classNameCard}`}
              classNameCircle={`circle ${skillbar.classNameCircle}`}
              classNameBar={`bar ${skillbar.classNameBar}`}
              classNamePercent={`percent ${skillbar.classNamePercent}`}
              percentage={`${skillbar.percentage}`}
              classNameText={skillbar.classNameText}
              skillName={skillbar.skillName}
            />
          ))}
        </Wrapper>
        {/* <Work className="work-container" />
        <Info className="main-info-container">
          <Wrapper className="main-info-wrapper">
            <Heading className="info-title" h1>
              Let's get in touch
            </Heading>
          </Wrapper>
          <Wrapper className="main-contact-wrapper">
            <TextInput className="main-form" inputLists={inputLists} />
          </Wrapper>
        </Info> */}
      </Container>
    </>
  );
}

Home.propTypes = HomeProps;

export default React.memo(Home);
