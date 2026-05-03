import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Doc from "./components/Doc";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import ProductDetail from "./components/ProductDetail";
import Error from "./components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/components/doc" element={<Doc />} />
            <Route path="/components/dashboard" element={<Dashboard />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
