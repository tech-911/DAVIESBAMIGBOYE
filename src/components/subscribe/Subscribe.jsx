import React from "react";
import "./subscribe.scss";
import subscribe from "../../assets/png/subscribe.png";
import {
  GrFacebookOption,
  GrTwitter,
  GrGooglePlus,
  GrInstagram,
} from "react-icons/gr";
const Subscribe = () => {
  return (
    <div className="subscribe_wrapper">
      <div className="subscribe_left">
        <div className="subscribe_newsletter">Weekly Newsletter</div>
        <h1 className="subscribe_text1">Take Control of Your Life</h1>
        <p className="subscribe_text2">
          Everything you need to thrive in this life has already been provided
          for. Would you like to manifest them?
        </p>
        <div className="subscribe_social_wrap">
          <div className="subscribe_socials">
            <div className="subscribe_facebook">
              <GrFacebookOption className="subscribe_facebook_icon" />
            </div>
            <div className="subscribe_twitter">
              <GrTwitter className="subscribe_twitter_icon" />
            </div>
            <div className="subscribe_google">
              <GrGooglePlus className="subscribe_google_icon" />
            </div>
            <div className="subscribe_instagram">
              <GrInstagram className="subscribe_instagram_icon" />
            </div>
          </div>
          <p className="subscribe_follow">Follow me on my social Media</p>
        </div>
        <div className="subscribe_input_wrap">
          <div className="subscribe_input">
            <input
              className="subscribe_input_field"
              type="email"
              placeholder="Enter your e-mail"
            />
          </div>

          <button className="subscribe_button">SUBSCRIBE!</button>
        </div>
      </div>
      <img className="subscribe_right" src={subscribe} alt="subscribe" />
    </div>
  );
};

export default Subscribe;
