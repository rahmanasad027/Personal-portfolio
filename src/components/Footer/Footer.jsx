import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>asadur.rehman@cheetay.pk</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/asad-rahman-0468a617b/">
          <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://web.facebook.com/">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href='https://github.com/rahmanasad222'>
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
