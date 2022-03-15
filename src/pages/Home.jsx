import React from "react";
import { Categories, SortPopup, PhoneBlock , LoadingBlock} from "../components";
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
  const isLoaded = useSelector(({ phones }) => phones.isLoaded);

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
        {isLoaded ? items.map((obj) => <PhoneBlock key={obj.id} isLoading={true} {...obj} />) : Array(12).fill(<LoadingBlock/>) }
      </div>
    </div>
  );
}

export default Home;

//#8 1:20:00