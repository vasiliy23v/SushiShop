import axios from "axios";

export const fetchPhones = () => (dispatch) => {
  axios.get("http://localhost:3000/db.json").then(({ data }) => {
    dispatch(setPhones(data.phones));
  });
};

export const setPhones = (items) => ({
  type: "SET_PHONES",
  payload: items,
});
//00,45,28