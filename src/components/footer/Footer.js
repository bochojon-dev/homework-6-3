import React from "react";
import "../footer/Footer.css";
const data = [
  {
    title: "Info",
    links: ["Formats", "Pricing", "FAQ", "Status"],
  },
  {
    title: "Getting started",
    links: ["Home", "About", "Contact", "Help"],
  },
  {
    title: "Resourses",
    links: ["Formats", "Pricing", "FAQ", "Status", "Blog"],
  },
];
function Footer() {
  let items = data?.map((el, inx) => (
    <div className="items" key={inx}>
      <h3>{el.title}</h3>
      <ul>
        {el?.links?.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  ));
  return <div className="footer">{items}</div>;
}

export default Footer;
