import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "./components/";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";

import { setPhones } from "./redux/actions/phones";

function App({ items }) {
  const dispatch = useDispatch();
  const state = useSelector(({phones, filters}) => {
      return {
        items: phones.items,
        filters: filters.sortBy,
      };
  });

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
          <Route path="/" element={<Home items={[]} />} exact />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// #7 00.42.00