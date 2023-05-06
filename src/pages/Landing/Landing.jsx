import React, { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import "./landing.scss";
import Header from "../../components/Header/Header";
import Mission from "../../components/mission/Mission";
import Support from "../../components/support/Support";

const Landing = () => {
  return (
    <div className="landing_wrapper">
      {/* <Nav /> */}
      <Header />
      <Mission />
      <Support />
    </div>
  );
};

export default Landing;
