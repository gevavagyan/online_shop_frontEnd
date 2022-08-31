import API_ENDPOINTS from '../endpoints';
// import axios from "axios";
import axios from '../../utils/axiosConfig';

export const registration = async (user) => {
  try {
    const res = await axios.post(`${API_ENDPOINTS.REGISTRATION}`, user)
      .then(res => res);
    console.log(res, 'res');
  } catch (e) {
    console.log(e);
  }
}
