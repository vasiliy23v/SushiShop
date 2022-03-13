import axios from "axios";
import { useDispatch } from "react-redux";

export const fetchPhones = () => {
  const dispatch =  useDispatch();
  axios.get("http://localhost:3000/db.json").then(({ data }) => {
    dispatch(setPhones(data.phones));
  });
}

export const setPhones = (items) => ({
  type: "SET_PHONES",
  payload: items,
});
