import {createContext, useContext} from "react";

const defaultState = {};

const Context = createContext(defaultState);

const useStore = () => useContext(Context);

function HeaderProvider({ children, value }) {

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  )
}


export { useStore, HeaderProvider };
