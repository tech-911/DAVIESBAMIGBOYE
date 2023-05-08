// import Nav from "../../components/nav/Nav";
import "./landing.scss";
import Header from "../../components/Header/Header";
import Mission from "../../components/mission/Mission";
import Support from "../../components/support/Support";
import Ready from "../../components/Ready/Ready";
import Footer from "../../components/footer/Footer";
import Subscribe from "../../components/subscribe/Subscribe";
import Access from "../../components/access/Access";
import Article from "../../components/article/Article";
import Courses from "../../components/courses/Courses";

const Landing = () => {
  return (
    <div className="landing_wrapper">
      {/* <Nav /> */}
      <Header />
      <Mission />
      <Support />
      <Ready />
      <Courses />
      <Access />
      <Article />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Landing;
