import API_ENDPOINTS from "../endpoints";
import axios from "axios";

export const getCategories = () => {
  try {
    axios.get(`${process.env.REACT_APP_BASE_URL}${PRODUCTS}`)
      .then(res => console.log(res.data))
  } catch (e) {

  }
}
