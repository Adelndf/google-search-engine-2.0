import React from "react";
import "./HeaderLinks.css";
import { SiJavascript } from "react-icons/si";
import { AiOutlineLink } from "react-icons/ai";
import { IoApps } from "react-icons/io5";

const HeaderLinks = () => {
  return (
    <div className="headerLinks">
      <p className="p-small">gmail</p>
      <p className="p-small">images</p>
      <AiOutlineLink />
      <IoApps />
      <SiJavascript />
    </div>
  );
};

export default HeaderLinks;
