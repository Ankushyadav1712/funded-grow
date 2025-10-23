import "./App.css";
import "./index.css";
import "./Style.css";
import React from "react";

import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";
import Support from "./pages/support/Support";
import Calucaltor from "./pages/calculator/Calculator";
import Homepage from "./pages/home/Homepage";
import Home from "./pages/dashboard/Home";
import Orders from "./pages/dashboard/Orders";
import Holding from "./pages/dashboard/Holding";
import Positions from "./pages/dashboard/Positions";
import Funds from "./pages/dashboard/Funds";
import Summary from "./pages/dashboard/Summary";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/calculate" element={<Calucaltor />}></Route>
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holding" element={<Holding />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/summary" element={<Summary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
