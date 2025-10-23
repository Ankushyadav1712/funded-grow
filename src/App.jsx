import "./App.css";
import "./index.css";
import "./Style.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";
import Support from "./pages/support/Support";
import Calculator from "./pages/calculator/Calculator";
import Homepage from "./pages/home/Homepage";
import Home from "./pages/dashboard/Home";
import Orders from "./pages/dashboard/Orders";
import Holding from "./pages/dashboard/Holding";
import Positions from "./pages/dashboard/Positions";
import Funds from "./pages/dashboard/Funds";
import Summary from "./pages/dashboard/Summary";
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ new import

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/calculate" element={<Calculator />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
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
