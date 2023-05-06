import React from "react";
import "./ready.scss";
import ReadyWidget from "../ready_widget/ReadyWidget";

const Ready = () => {
  return (
    <div className="ready_wrapper">
      <h1 className="ready_text1">Ready for </h1>
      <h1 className="ready_text2">Transformation?</h1>
      <p className="ready_text3">
        WE BELIEVE THAT PERSONAL TRANSFORMATION COMES WITH THESE 3 STEPS
      </p>
      <div className="ready_widget_wrap">
        <ReadyWidget
          buttonTitle={"Dig Deep"}
          text1={"Knowing Your Identity"}
          text2={
            "If you never knew your Royal Identity, You would be deceive to live as slave."
          }
          key={0}
        />
        <ReadyWidget
          buttonTitle={"Read More"}
          text1={"Renewing Your Mind & Meditation"}
          text2={
            "The mind is the battlefield limiting your success. Learn how to master your Mind."
          }
          key={1}
        />
        <ReadyWidget
          buttonTitle={"Explore GratitudeFest"}
          text1={"A Lifestyle of Gratitude"}
          text2={
            "Gratitude is the multiplier of abundance. When you grumble, you will attract the same vice into your life."
          }
          key={2}
        />
      </div>
    </div>
  );
};

export default Ready;
