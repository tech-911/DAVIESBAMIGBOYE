import React, { useEffect, useRef, useState } from "react";
import "./mission.scss";
import Davis from "../../assets/png/davis.png";

const Mission = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasShown = useRef(false);
  const interval = useRef(null);

  useEffect(() => {
    if (count >= 20) {
      clearInterval(interval.current);
    }
  }, [count]);

  useEffect(() => {
    const callback = (arg) => {
      if (!hasShown.current && arg[0].isIntersecting) {
        interval.current = setInterval(() => {
          setCount((state) => state + 1);
        }, 100);
        hasShown.current = true;
      }
    };
    let options = {
      root: document.querySelector(".landing_wrapper"),
      rootMargin: "0px",
      threshold: 1,
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(counterRef.current);
  }, []);
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
          <div ref={counterRef} className="mission_davis_year">
            <p className="mission_no">{count}</p>
            <p className="mission_no_title">Years of Experience</p>
          </div>
        </div>
      </div>
      <h1 className="mission_name">Davies K. Bamigboye</h1>
    </div>
  );
};

export default Mission;
