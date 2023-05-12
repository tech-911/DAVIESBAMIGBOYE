import React, { useRef } from "react";
import "./blogHeader.scss";
import Slider from "react-slick";
import Nav from "../nav/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
const BlogHeader = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const slickRef = useRef(null);
  console.log(slickRef);
  const Next = () => {
    slickRef.current.slickNext();
  };
  const Prev = () => {
    slickRef.current.slickPrev();
  };
  return (
    <div className="bloghead_wrapper">
      <div className="bloghead_nav">
        <Nav />
      </div>
      <Slider className="bloghead_carousel" {...settings} ref={slickRef}>
        <img
          className="bloghead_item1"
          src="https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/10/max-ovcharenko-LbBro6HtcSs-unsplash.jpg"
          alt="hero1"
        />
        <img
          className="bloghead_item1"
          src="https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/10/daniel-j-schwarz-UCoUdQ5dFTU-unsplash.jpg"
          alt="hero2"
        />
        <img
          className="bloghead_item1"
          src="https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/10/stewart-maclean-mT8E8qJGfmE-unsplash.jpg"
          alt="hero3"
        />
        <img
          className="bloghead_item1"
          src="https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/09/jeremy-bishop-mMEEkgj5fU-unsplash.jpg"
          alt="hero4"
        />
        <img
          className="bloghead_item1"
          src="https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/09/holly-mandarich-duq_b5-unhw-unsplash.jpg"
          alt="hero5"
        />
      </Slider>
      <div className="bloghead_overlay"></div>
      <div className="bloghead_next" onClick={Next}>
        <MdKeyboardArrowRight className="bloghead_next_icon" />
      </div>
      <div className="bloghead_prev" onClick={Prev}>
        <MdKeyboardArrowLeft className="bloghead_prev_icon" />
      </div>
    </div>
  );
};

export default BlogHeader;
