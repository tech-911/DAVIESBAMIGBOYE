import React from "react";
import "./header.scss";
import Nav from "../nav/Nav";
import { MdOutlineBookmark } from "react-icons/md";
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
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
