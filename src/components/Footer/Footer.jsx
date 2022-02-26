import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        {["About", "Advertising", "Business", "How Search works"].map(
          (item, i) => (
            <p className="p-small" key={i}>
              {item}
            </p>
          )
        )}
      </div>
      <div className="footer__right">
        {["Privacy", "Terms", "Settings"].map((item, i) => (
          <p className="p-small" key={i}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
