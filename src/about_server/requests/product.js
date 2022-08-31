import axios from "axios";
import API_ENDPOINTS from "../endpoints";

const { PRODUCTS } = API_ENDPOINTS;

export const get = async () => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_BASE_URL}${PRODUCTS}`)
      .then(res => console.log(res))
    .catch(res => console.log(res));
    if (status === 200) {
      return Promise.resolve({ status: 'success', data });
    } else {
      return Promise.resolve({ status: 'failure', massage: data || 'something went wrong' });
    }
  } catch (e) {
    console.log(e);
  }
}
