import React from "react";
import "./courses.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticleWidget from "../article_widget/ArticleWidget";
import { FiBookmark } from "react-icons/fi";
const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="course_wrapper">
      <h1 className="course_head">ONLINE COACHING COURSES</h1>
      <Slider className="course_carousel" {...settings}>
        <div className="course_carousel_item">
          {" "}
          <ArticleWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2019/05/riki-ramdani-434997-unsplash-Large-550x362.jpg"
            }
            text1={"Nutrition: Build Your Perfect Diet & Meal Plan"}
            text2={"May 20, 2023"}
            key={0}
          />
        </div>

        <div className="course_carousel_item">
          <ArticleWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2019/05/nathan-dumlao-454452-unsplash-1920-550x362.jpg"
            }
            text1={"Overcome Your Fears and Become Stronger in 21 Days"}
            text2={"May 20, 2023"}
            key={1}
          />
        </div>

        <div className="course_carousel_item">
          {" "}
          <ArticleWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2019/05/myoung-kangs-569499-unsplash-Custom-550x362.jpg"
            }
            text1={"Overcome Your Fears and Become Stronger in 21 Days"}
            text2={"May 20, 2023"}
            key={2}
          />
        </div>

        <div className="course_carousel_item">
          {" "}
          <ArticleWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2019/05/d9d1ff99-ff23-4f59-bf3s0-edd6a218ef68-1920-550x362.jpg"
            }
            text1={"Overcome Your Fears and Become Stronger in 21 Days"}
            text2={"May 20, 2023"}
            key={3}
          />
        </div>

        <div className="course_carousel_item">
          <ArticleWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2019/05/jack-dong-2ClcNjIb-eY-unsplash-550x362.jpg"
            }
            text1={"Overcome Your Fears and Become Stronger in 21 Days"}
            text2={"May 20, 2023"}
            key={4}
          />
        </div>

        <div className="course_carousel_item">
          {" "}
          <ArticleWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2019/05/jon-tyson-epgajBY7Wvw-unsplash-550x362.jpg"
            }
            text1={"Overcome Your Fears and Become Stronger in 21 Days"}
            text2={"May 20, 2023"}
            key={5}
          />
        </div>
      </Slider>
      <button className="course_button">
        <FiBookmark className="course_button_icon" />
        VIEW ALL COURSES
      </button>
    </div>
  );
};

export default Courses;
