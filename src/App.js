import "./App.scss";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import Start from "./pages/Start/Start";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </div>
  );
};

export default App;
