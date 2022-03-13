import React from "react";

import { useDispatch } from "react-redux";

import { Header } from "./components/";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";

import { fetchPhones } from "./redux/actions/phones";

function App() {
  const dispatch = useDispatch();



  React.useEffect(() => {

  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// #8 00.00.00