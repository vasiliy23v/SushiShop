import React from "react";
import { Categories, SortPopup, PhoneBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { fetchPhones } from "../redux/actions/phones";

const categoryNames = ["Острые", "С лососем", "С крабом", "С креветкой", "С угрём", "Класические"]
const sortItems = [
  { name: "Популярности", type: "popular" },
  { name: "Цене", type: "price" },
  { name: "Алфавиту", type: "alphabet" },
  { name: "Скидкам", type: "sales" },
]
function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ phones }) => phones.items);

  React.useEffect(() => {
    dispatch(fetchPhones());
  }, []);

  const onSelectCategory = React.useCallback(
    (index) => dispatch(setCategory(index)),
    []
  );

  

  return (
    <div className="container">
      <div className="content__top"> 
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          items={sortItems}
        />
      </div>

      <h2 className="content__title">Все суши</h2>
      <div className="content__items">
        {console.log(items)}
        {items && items.map((obj) => <PhoneBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;

