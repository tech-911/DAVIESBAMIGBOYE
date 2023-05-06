import "./App.scss";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import MobileAuth from "./pages/mobileAuth/MobileAuth.jsx";
import { useEffect } from "react";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        {/* <Route path="/auth" element={<MobileAuth />} /> */}
      </Routes>
    </div>
  );
};

export default App;
