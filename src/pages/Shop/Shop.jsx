import React from "react";
import "./shop.scss";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";
import ShopWidget from "../../components/shop_widget/ShopWidget";

const Shop = () => {
  return (
    <div className="shop_wrapper">
      <div className="shop_nav">
        <Nav />
      </div>
      <div className="shop_body">
        <h1 className="shop_header">Shop</h1>
        <div className="shop_sorting">
          <p className="shop_sort_left">Showing all 6 results</p>
          <p className="shop_sort_right">
            Default sorting <MdKeyboardArrowDown className="shop_arrdown" />
          </p>
        </div>
        <div className="shop_widget_wrap">
          <ShopWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/11/book-05.jpg"
            }
            text1={"Awaken the Giant Within"}
            text2={"£29.00"}
            key={0}
          />
          <ShopWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/11/book-02.jpg"
            }
            text1={"Don’t Sweat the Small Stuff"}
            text2={"£29.00"}
            key={1}
          />
          <ShopWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/11/book-03.jpg"
            }
            text1={"Find Yourself"}
            text2={"£29.00"}
            key={2}
          />
          <ShopWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/11/book-01.jpg"
            }
            text1={"Inspire"}
            text2={"£29.00"}
            key={3}
          />
          <ShopWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/11/book-06.jpg"
            }
            text1={"The Power of Positive Thinking"}
            text2={"£29.00"}
            key={4}
          />
          <ShopWidget
            img={
              "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/11/book-04.jpg"
            }
            text1={"What Motivates Us"}
            text2={"£29.00"}
            key={5}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
