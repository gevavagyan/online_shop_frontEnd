import useStyles from "./styles";
import { ProductItem } from '../productItem'
import {useEffect, useState} from "react";
import { get } from '../../about_server/requests/product';

import axios from "axios";
import API_ENDPOINTS from "../../about_server/endpoints";
const {
  PRODUCTS
} = API_ENDPOINTS;

function Products() {
  const styles = useStyles();

  const [products, setProducts] = useState([])

  useEffect(() => {
    // get();
    axios.get(`${process.env.REACT_APP_BASE_URL}${PRODUCTS}`)
      .then(res => {
        console.log(res, 'res')
        setProducts(res.data)
      })
  },[])

  return (
    <div className={styles.wrapper}>
      { products.length && products.map(({ id, ...product}) => <ProductItem key={ id } data={ product }/>) }
      products
    </div>
  )
}

export { Products };
