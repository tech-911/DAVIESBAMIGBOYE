import "./App.scss";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default App;
