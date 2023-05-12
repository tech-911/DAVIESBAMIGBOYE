import React from "react";
import "./start.scss";
import Support from "../../components/support/Support";
import Footer from "../../components/footer/Footer";
import Subscribe from "../../components/subscribe/Subscribe";
import Nav from "../../components/nav/Nav";
import Service from "../../components/service/Service";
const Start = () => {
  return (
    <div className="start_wrapper">
      <div className="start_nav">
        <Nav />
      </div>
      <Service />
      <Support />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Start;
