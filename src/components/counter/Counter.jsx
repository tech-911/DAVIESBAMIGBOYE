import React, { useEffect, useRef, useState } from "react";
import "./counter.scss";

const Counter = ({ text, fromval, toval, symbol }) => {
  const [count, setCount] = useState(fromval);
  const counterRef = useRef(null);
  const hasShown = useRef(false);
  const interval = useRef(null);

  useEffect(() => {
    if (count >= toval) {
      clearInterval(interval.current);
    }
  }, [count]);

  useEffect(() => {
    const callback = (arg) => {
      if (!hasShown.current && arg[0].isIntersecting) {
        interval.current = setInterval(() => {
          setCount((state) => state + 1);
        }, 10);
        hasShown.current = true;
        console.log("an if statement");
      }

      console.log(arg);
    };
    let options = {
      root: document.querySelector(".landing_wrapper"),
      rootMargin: "0px",
      threshold: 0.01,
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(counterRef.current);
  }, []);
  return (
    <div ref={counterRef} className="counter_wrapper">
      <h1 className="counter_number">{`${count}${symbol}`}</h1>
      <p className="counter_text">{text || "count"}</p>
    </div>
  );
};

export default Counter;
