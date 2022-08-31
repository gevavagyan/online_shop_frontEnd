import useStyles from "./styles";

import menu from '../../assets/menu.png';
import user from '../../assets/user.png';
import basket from '../../assets/basket.png';
import delivery from '../../assets/delivery.png';
import location from '../../assets/location.png';
import search from '../../assets/search.png';
import close from '../../assets/closeBar.png';

import { HeaderNavigationItem } from '../headerNavigationItem';
import {useEffect, useMemo, useState} from "react";
import { SelectBar } from "../selectBar";

import { HeaderProvider } from '../../contextStore';

import axios from "axios";

import API_ENDPOINTS from "../../about_server/endpoints";
const {
  CATEGORIES_WITH_SUB_CATEGORIES,
  PRODUCTS
} = API_ENDPOINTS;

const navLinkDate = [
  {
    src: location,
    title: 'Addresses'
  },
  {
    src: delivery,
    title: 'Delivery'
  },
  {
    src: user,
    title: 'Profile'
  },
  {
    src: basket,
    title: 'Basket'
  }
]

function Header() {
  const styles = useStyles();

  const [inputValue, setInputValue] = useState('');
  const [isBarOpen, setBarState] = useState(false);
  const [isSubBarOpen, setSubBarState] = useState(false); // sub category name or false

  const [categories, setCategories] = useState([]);

  const subCategories = useMemo(() => {
    if(!isSubBarOpen)  return;

    const CheckedCategory = categories.find(category => category.name === isSubBarOpen);

    const { subCategories }   = CheckedCategory;

    return subCategories;
  }, [categories, isSubBarOpen]);



  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}${CATEGORIES_WITH_SUB_CATEGORIES}`)
      .then(res => res.json())
      .then(category => {
        setCategories(category)
      })
  }, []);




  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const openBar = (event) => {
    setBarState(true);
    event.stopPropagation();
  };

  const closeBar = () => {
    setSubBarState(false);
    setBarState(false);
  }

  return (
      <div  className={ styles.wrapper }>
        <HeaderProvider value={{
          bar: {
            state: isBarOpen,
            setState: setBarState
          },
          subBar: {
            state: isSubBarOpen,
            setState: setSubBarState
          },
        }}>
          {
            isBarOpen && <div className={ styles.modalsWrapper}>
              <SelectBar barType='bar' categories={ categories } />
              { isSubBarOpen && <SelectBar barType='subBar' categories={ subCategories } /> }
              <div onClick={ closeBar } className={ styles.closeBar }>
                <img className={ styles.closeImg } src={ close } alt="...Loading"/>
              </div>
            </div>
          }
        </HeaderProvider>
        <div onClick={ openBar } className={styles.btnWrapper} >
          <img src={ menu } alt="...Loading"/>
        </div>
        <div className={ styles.hidSearch }>
          <img src={search} alt="...Loading"/>
        </div>
        <div className={ styles.hidenMenu }>
          <div>
            <h1 className={ styles.heading }>amazon</h1>
          </div>
          <div className={ styles.lastBlock }>
            <div className={ styles.inputWrapper }>
              <input onBlur={ handleInputChange } className={ styles.searchInput } placeholder='Search' type="text"/>
            </div>
            <div className={ styles.linksWrapper }>
              { navLinkDate.map(item => <HeaderNavigationItem key={ item.title } {...item} />) }
            </div>
          </div>
        </div>
      </div>
  )
}
export { Header }

