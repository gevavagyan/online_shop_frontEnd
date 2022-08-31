import useStyles from './styles';

import { SelectBarItem } from './selectBarItem';
import { useEffect, useRef } from "react";
import { useStore } from "../../contextStore";

import Electronics from '../../assets/electronics.png';
import shoes from '../../assets/shoes.png';
import clothes from '../../assets/clothes.png';
const images = {
  Electronics,
  "For men": shoes,
  "For women": clothes
}

function SelectBar({ barType, categories }) {
  const styles = useStyles();

  const modalHandlerName = barType === 'bar' ? 'setBarState': 'setSubBarState';
  const EVENT_TYPE = barType === 'bar' ? 'onMouseEnter' : 'onClick';

  const barRef = useRef();

  const  {
    bar,
    subBar,
  } = useStore();


  const closeBar = (event) => {
    if(!barRef.current.contains(event.target)) {
      bar.setState(false);
      subBar.setState(false);
    }
  }

  const barItemHandlers = {
    onClick(event) {
      console.log('onClick');
    },
    onMouseEnter(event) {
      subBar.setState(event.target.innerText);
    }
  }


  const handler = {
    [EVENT_TYPE]: barItemHandlers[EVENT_TYPE]
  }

  useEffect(() => {
    document.addEventListener('click', closeBar);
    return () => {
      document.removeEventListener('click', closeBar);
    }
  }, []);

  return (
    <div ref={ barRef } className={ styles[barType] } id={ barType }>
      {barType === 'subBar' && <h2 className={styles.subBarTitle}>{subBar.state}</h2>}
      { categories.map((category) => <SelectBarItem key={ category.id } name={category.name} src={barType === 'bar' ? images[category.name]: null} handler={ handler }/>)}
    </div>
  );
}

export { SelectBar };

// helpfull information -
// In this component, I had a choice to use
// HOC or solve the problem
// through props and since the different logic is
// not that big i decided to use the same component
// and solve the problem using props-barType.
