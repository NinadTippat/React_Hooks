import React from "react";
import "./App.css";

import Nav from "./components/useLocation/Nav";
import About from "./components/useLocation/About";
import Index from "./components/useLocation/Index";
import Login from "./components/useLocation/Login";
// import UseContext1 from "./components/UseContext/UseContext1";
// import Uncontrolled from "./components/Forms/Uncontrolled";
// import UseReducers from "./components/UseReducers";
// import UseEffectAPI from "./components/useEffect/UseEffectAPI";
// import UseEffects2 from "./components/useEffect/UseEffects2";
// import UseEffects1 from "./components/useEffect/UseEffects1";
// import BasicForms from "./components/Forms/BasicForms";
// import RulesHook from "./components/RulesHook";
// import UseStateArray from "./components/UseStateArray";
// import UseStateObject from "./components/UseStateObject";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <UseEffectAPI /> */}
      <Routes>
        {/* <RulesHook /> */}
        {/* <UseStateArray /> */}
        {/* <UseStateObject /> */}
        {/* <BasicForms /> */}
        {/* <UseEffects1 /> */}
        {/* <UseEffects2 /> */}
        {/* <UseEffectAPI /> */}
        {/* <Uncontrolled /> */}
        {/* <UseReducers /> */}
        {/* <UseContext1 /> */}

        <Route path="/about" element={<About />} />
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
