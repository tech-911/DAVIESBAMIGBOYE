import React, { useState } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose, GrFacebookOption } from "react-icons/gr";
const Nav = () => {
  const [navDrop, setNavDrop] = useState(0);
  console.log(navDrop);
  return (
    <div className={`nav_wrapper ${navDrop ? "nav_wrapper_white" : ""}`}>
      <div className="nav_left">
        <h1 className="nav_name">DAVIES K. BAMIGBOYE</h1>
        <AiOutlineTwitter className="nav_twitter" />
        <AiOutlineInstagram className="nav_instagram" />
        <AiFillLinkedin className="nav_linkden" />
      </div>
      <div className="nav_right">
        <Link to="/" className="nav_link1 nav_link">
          Home
        </Link>
        <Link to="/" className="nav_link2 nav_link">
          Start Here
        </Link>
        <Link to="/" className="nav_link3 nav_link">
          Courses
        </Link>
        <Link to="/" className="nav_link4 nav_link">
          Blog
        </Link>
        <Link to="/" className="nav_link5 nav_link">
          Shop
        </Link>
        <Link to="/" className="nav_link6 nav_link">
          Contact
        </Link>
        <div className="nav_aux_wrap">
          <HiOutlineShoppingBag className="nav_shop" />
          <HiOutlineSearch className="nav_search" />
        </div>
      </div>
      <div className="navres_wrap">
        <div className="navres_left">
          {navDrop ? (
            <GrFormClose
              onClick={() => {
                setNavDrop(!navDrop);
              }}
              className={`navres_right ${
                navDrop ? "navres_element_black" : ""
              }`}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                setNavDrop(!navDrop);
              }}
              className={`navres_left_icon ${
                navDrop ? "navres_element_black" : ""
              }`}
            />
          )}

          <p
            className={`navres_left_text ${
              navDrop ? "navres_element_black" : ""
            }`}
          >
            DAVIES K. BAMIGBOYE
          </p>
        </div>
        <HiOutlineShoppingBag
          className={`navres_right ${navDrop ? "navres_element_black" : ""}`}
        />
      </div>
      <div
        className={`navres_drop_wrap ${
          navDrop ? "navres_drop_wrap_open" : "navres_drop_wrap_close"
        }`}
      >
        <Link to="/" className="navres_link1 navres_link">
          Home
        </Link>
        <div className="navres_border"></div>
        <Link to="/" className="navres_link2 navres_link">
          Start Here
        </Link>
        <div className="navres_border"></div>
        <Link to="/" className="navres_link3 navres_link">
          Courses
        </Link>
        <div className="navres_border"></div>
        <Link to="/" className="navres_link4 navres_link">
          Blog
        </Link>
        <div className="navres_border"></div>
        <Link to="/" className="navres_link5 navres_link">
          Shop
        </Link>
        <div className="navres_border"></div>
        <Link to="/" className="navres_link6 navres_link">
          Contact
        </Link>
        <div className="navres_aux_wrap">
          <GrFacebookOption className="navres_facebook" />
          <AiOutlineTwitter className="navres_twitter" />
          <AiOutlineInstagram className="navres_instagram" />
          <AiFillLinkedin className="navres_linkden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
