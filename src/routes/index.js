import { Login} from "../components/login";
import { Registration} from "../components/registration";
import { Products } from "../components/products";

const routes = [
  {
    exact: true,
    path: "/",
    element: Products
  },
  {
    exact: true,
    path: "/login",
    element: Login
  },
  {
    exact: true,
    path: "/registration",
    element: Registration
  }
];

export { routes }
