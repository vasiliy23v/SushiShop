import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Header } from "./components/";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";

import { setPhones } from "./redux/actions/phones";

function App() {
  const dispatch = useDispatch();



  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPhones(data.phones));
    });
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