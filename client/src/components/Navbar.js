import React, { useState } from "react";

import Link from "./Link";
import Button from "./Button";
import Symbol from "./Symbol";
import Image from "./Image";
import Wrapper from "./Wrapper";
import Tooltip from "./Tooltip";

import { capitalizeFirst } from "../utils/tools";
import { NavbarProps } from "../utils/type";
import { motion } from "framer-motion";

import "../assets/style/sass/components/navbar.sass";

function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleTooltipMouseEnter = (text) => {
    setTooltipText(text);
  };

  const handleMouseLeave = () => {
    setTooltipText("");
  };

  return (
    <motion.nav className={props.className}>
      <Button
        className={`${props.classNameMenuBtn} ${showMenu ? "open" : "closed"}`}
        type="button"
        onClick={handleShowMenu}
      >
        <Symbol type="menu" className="nav-menu-symbol" />
      </Button>
      {showMenu && (
        <motion.ul className={props.classNameList} id={props.idList}>
          {props.urlLink.map((urllink) => (
            <>
              <motion.li
                className={`${props.classNameItem} ${
                  showMenu ? "open" : "closed"
                }`}
                onMouseEnter={() => handleTooltipMouseEnter(urllink.text)}
                onMouseLeave={handleMouseLeave}
              >
                <Wrapper className={props.classNameLinkIcon}>
                  <Link className={props.classNameLink} href={urllink.url}>
                    <Image
                      className={`nav-img ${urllink.text}-icon`}
                      src={urllink.icon}
                    />
                  </Link>
                </Wrapper>
                {props.children}
              </motion.li>
              {tooltipText === urllink.text && (
                <Wrapper
                  className={`tooltip-wrapper ${showMenu ? "open" : "closed"} ${
                    urllink.text
                  }-tooltip`}
                >
                  <Tooltip className="tooltip">
                    {capitalizeFirst(urllink.text)}
                  </Tooltip>
                </Wrapper>
              )}
            </>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}

Navbar.propTypes = NavbarProps;

export default React.memo(Navbar);
