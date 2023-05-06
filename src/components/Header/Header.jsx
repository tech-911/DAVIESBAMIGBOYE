import React from "react";
import "./header.scss";
import Nav from "../nav/Nav";
import { MdOutlineBookmark } from "react-icons/md";
import img1 from "../../assets/png/header_font_design/1.png";
import img2 from "../../assets/png/header_font_design/2.png";
import img3 from "../../assets/png/header_font_design/3.png";
import img4 from "../../assets/png/header_font_design/4.png";
import img5 from "../../assets/png/header_font_design/5.png";
const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="header_nav">
        <Nav />
      </div>
      <div className="header_overlay"></div>
      <div className="header_items_wrap">
        <h1 className="header_textbig">
          Coach, Author, Mentor, Consultant and Teacher
        </h1>
        <p className="header_textsmall">
          Discover the Truth for your Freedom. Get all my books and audio tapes!
        </p>
        <button className="header_button">
          <MdOutlineBookmark className="header_button_tag" />
          <p className="header_button_text">Get Your Free Guide Now!</p>
        </button>
        <div className="header_buttomimg_wrap">
          <img src={img1} alt="font design" />
          <img src={img2} alt="font design" />
          <img src={img3} alt="font design" />
          <img src={img4} alt="font design" />
          <img src={img5} alt="font design" />
        </div>
      </div>
    </div>
  );
};

export default Header;
