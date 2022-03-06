import React from "react";
import { Categories, SortPopup, PhoneBlock } from "../components";

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={["Apple", "Samsung", "Xiaomi", "Poco", "Motorolla", "Lenovo"]}
        />
        <SortPopup
          items={[
            { name: "Популярности", type: "popular" },
            { name: "Цене", type: "price" },
            { name: "Алфавиту", type: "alphabet" },
            { name: "Скидкам", type: "sales" },
          ]}
        />
      </div>

      <h2 className="content__title">Все смартфоны</h2>
      <div className="content__items">
        {console.log(items)}
        {items && items.map((obj) => (
          <PhoneBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
