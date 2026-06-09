import "./App.css";
import { Navbar } from "./component/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./component/Home";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Help } from "./component/Help";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/help" element={<Help />} /> */}
        <Route path="/help" element={<Navigate to={"/"} replace={true} />} />
      </Routes>
    </>
  );
}

export default App;
