import React, { useEffect, useState } from "react";
import "./counter.scss";

const Counter = ({ text, fromval, toval, symbol }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let landing = document.querySelector(".landing_wrapper");
    const spanElement = document.querySelector(".counter_number");
    const elementTop = spanElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    let interval;
    console.log("element top: ", elementTop);
    console.log("window height: ", windowHeight);
    console.log("differnce: ", elementTop < windowHeight);
    function updateCount() {
      if (count < toval) {
        setCount(() => {
          return count + 1;
        });
        console.log(count);
      }
      console.log("line23");
    }

    // if (elementTop < windowHeight) {
    //   interval = setInterval(updateCount, 10);
    //   return () => clearInterval(interval);
    // }

    function handleScroll() {
      if (elementTop < windowHeight) {
        interval = setInterval(updateCount, 10);
        return () => clearInterval(interval);
      }
    }

    landing.addEventListener("scroll", handleScroll);
    return () => landing.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="counter_wrapper">
      <h1 className="counter_number">{`${count}${symbol}`}</h1>
      <p className="counter_text">{text || "count"}</p>
    </div>
  );
};

export default Counter;
