import React, { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import "./landing.scss";
import Header from "../../components/Header/Header";
import Mission from "../../components/mission/Mission";
import Support from "../../components/support/Support";
import Ready from "../../components/Ready/Ready";
import Footer from "../../components/footer/Footer";
import Subscribe from "../../components/subscribe/Subscribe";

const Landing = () => {
  return (
    <div className="landing_wrapper">
      {/* <Nav /> */}
      <Header />
      <Mission />
      <Support />
      <Ready />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Landing;
