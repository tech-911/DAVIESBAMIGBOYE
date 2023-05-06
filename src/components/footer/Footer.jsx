import React from "react";
import "./footer.scss";
import foot1 from "../../assets/png/footerimg/1.png";
import foot2 from "../../assets/png/footerimg/2.png";
import foot3 from "../../assets/png/footerimg/3.png";
import foot4 from "../../assets/png/footerimg/4.png";
import foot5 from "../../assets/png/footerimg/5.png";
import foot6 from "../../assets/png/footerimg/6.png";
import foot7 from "../../assets/png/footerimg/7.png";
import foot8 from "../../assets/png/footerimg/8.png";
import foot9 from "../../assets/png/footerimg/9.png";
import foot10 from "../../assets/png/footerimg/10.png";
import foot11 from "../../assets/png/footerimg/11.png";
import foot12 from "../../assets/png/footerimg/12.png";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_first">
        <img src={foot1} alt="footimg1" />
        <img src={foot2} alt="footimg2" />
        <img src={foot3} alt="footimg3" />
        <img src={foot4} alt="footimg4" />
        <img src={foot5} alt="footimg5" />
        <img src={foot6} alt="footimg6" />
        <img src={foot7} alt="footimg7" />
        <img src={foot8} alt="footimg8" />
        <img src={foot9} alt="footimg9" />
        <img src={foot10} alt="footimg10" />
        <img src={foot11} alt="footimg11" />
        <img src={foot12} alt="footimg12" />
      </div>
      <p className="footer_second">
        2023 DAVIES K. BAMIGBOYE – ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default Footer;
