import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPhones = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios
    .get(
      `http://localhost:3001/phones?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPhones(data));
    });
};

export const setPhones = (items) => ({
  type: "SET_PHONES",
  payload: items,
});
//00,45,28
