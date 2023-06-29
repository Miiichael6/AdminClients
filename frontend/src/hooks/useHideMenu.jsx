import { useContext, useEffect } from "react"
import { UIContext } from "../context/UIContext"

const useHideMenu = (hide) => {
  const {showMenu, displayNoneMenu} = useContext(UIContext)

  useEffect(() => {
    if(hide){
      showMenu()
    }else {
      displayNoneMenu()
    }
  }, [hide,showMenu, displayNoneMenu])

  return {

  }
}

export default useHideMenu