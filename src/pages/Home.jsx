import React from "react";
import { Categories, SortPopup, SushiBlock, LoadingBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchSushi } from "../redux/actions/sushi";
import { addSushiToCart } from "../redux/actions/cart";

const categoryNames = [
  "Класические",
  "Веганские",
  "С лососем",
  "С крабом",
  "С креветкой",
  "С угрём",
  "Острые",
];
const sortItems = [
  { name: 'Цене', type: 'currentPrice', order: 'asc' },
  { name: 'Алфавиту', type: 'name', order: 'asc' },
  { name: 'Популярности', type: 'popular', order: 'desc' },
];
function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ sushi }) => sushi.items);
  const isLoaded = useSelector(({ sushi }) => sushi.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchSushi(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback(
    (index) => dispatch(setCategory(index)),
    []
  );

  const onSelectSortType = React.useCallback(
    (type) => dispatch(setSortBy(type)),
    []
  );

  const handleAddSushiToCart = (obj) => {
    dispatch({
      type: "ADD_SUSHI_CART",
      payload: obj,
    });
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
           activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>

      <h2 className="content__title">Все суши</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <SushiBlock onClickAddSushi={handleAddSushiToCart} key={obj.id} isLoading={true} {...obj} />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;

//#9 00.25.00
