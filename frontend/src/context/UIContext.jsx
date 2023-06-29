import { createContext, useState } from "react";

export const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(true);

  const showMenu = () => {
    setHideMenu(true);
  };

  const displayNoneMenu = () => {
    setHideMenu(false);
  };

  const data = {
    displayNoneMenu,
    showMenu,
    hideMenu
  };

  return <UIContext.Provider value={data}>{children}</UIContext.Provider>;
};

export default UIContextProvider;
