import React from "react";

import { FooterProps } from "../utils/type";

import "../assets/style/sass/components/footer.sass";

function Footer(props) {
  return (
    <footer className={props.className}>
      <p>Copyright &copy; 2020-{props.currentYear}. All Rights Reserved.</p>
    </footer>
  );
}

Footer.propTypes = FooterProps;

export default React.memo(Footer);
