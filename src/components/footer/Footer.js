import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {/* {emoji("Made with ❤️ by DeveloperFolio Team")} */}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          For Business Inquiries :{" "}
          <a
            href="https://tankdynamixlabs.com"
            target="_blank"
            rel="noreferrer"
          >
            Tankdynamixlabs
          </a>
        </p>
      </div>
    </Fade>
  );
}
