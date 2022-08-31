import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`
});
//
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// instance.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
