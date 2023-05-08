import React from "react";
import "./shop_widget.scss";
const ShopWidget = ({ img, text1, text2 }) => {
  return (
    <div className="shopwid_wrapper">
      <div className="shopwid_image_wrap">
        <img className="shopwid_img" src={img} alt="shopimg" />
        <div className="shopwid_overlay">
          <button className="shopwid_button">ADD TO CART</button>
        </div>
      </div>
      <h2 className="shopwid_text1">{text1}</h2>
      <p className="shopwid_text2">{text2}</p>
    </div>
  );
};

export default ShopWidget;
