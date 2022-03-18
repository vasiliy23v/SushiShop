import React from "react";
import { Categories, SortPopup, PhoneBlock, LoadingBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPhones } from "../redux/actions/phones";

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
  const items = useSelector(({ phones }) => phones.items);
  const isLoaded = useSelector(({ phones }) => phones.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPhones(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback(
    (index) => dispatch(setCategory(index)),
    []
  );

  const onSelectSortType = React.useCallback(
    (type) => dispatch(setSortBy(type)),
    []
  );

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
              <PhoneBlock key={obj.id} isLoading={true} {...obj} />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;

//#8 1:20:00
