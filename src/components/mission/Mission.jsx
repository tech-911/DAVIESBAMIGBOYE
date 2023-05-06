import React from "react";
import "./mission.scss";
import Davis from "../../assets/png/davis.png";

const Mission = () => {
  return (
    <div className="mission_wrapper">
      <div className="mission_container">
        <div className="mission_left">
          <p className="mission_header_text">- Mission</p>
          <h1 className="mission_header_text2">
            To raise transformation agents who pursue the beauty of living the
            Higher Life God has designed for everyone
          </h1>
          <p className="mission_header_text3">
            Hey, I am Davies K. Bamigboye, and i am glad to meet you. I believe
            that success in life should be wholesome - spirit, soul, and body,
            and that success starts from fulfilling your life’s assignment with
            good health, sound mind, and spiritual density secured. I believe
            that mind renewal in line with scriptures is the foundation for a
            successful life.
          </p>
        </div>
        <div className="mission_right">
          <img className="mission_davis" src={Davis} alt="davis" />
          <div className="mission_davis_year">
            <p className="mission_no">20</p>
            <p className="mission_no_title">Years of Experience</p>
          </div>
        </div>
      </div>
      <h1 className="mission_name">Davies K. Bamigboye</h1>
    </div>
  );
};

export default Mission;
