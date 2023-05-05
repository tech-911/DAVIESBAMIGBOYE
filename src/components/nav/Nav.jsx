import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi";
const Nav = () => {
  return (
    <div className="nav_wrapper">
      <div className="nav_left">
        <h1 className="nav_name">DAVIES K. BAMIGBOYE</h1>
        <AiOutlineTwitter className="nav_twitter" />
        <AiOutlineInstagram className="nav_instagram" />
        <AiFillLinkedin className="nav_linkden" />
      </div>
      <div className="nav_right">
        <Link className="nav_link1 nav_link">Home</Link>
        <Link className="nav_link2 nav_link">Start Here</Link>
        <Link className="nav_link3 nav_link">Courses</Link>
        <Link className="nav_link4 nav_link">Blog</Link>
        <Link className="nav_link5 nav_link">Shop</Link>
        <Link className="nav_link6 nav_link">Contact</Link>
        <div className="nav_aux_wrap">
          <HiOutlineShoppingBag className="nav_shop" />
          <HiOutlineSearch className="nav_search" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
