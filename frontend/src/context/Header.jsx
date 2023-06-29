import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UIContext } from "./UIContext";

const linkStyle = "font-medium text-orange-300 hover:underline";

const Header = () => {
  const { hideMenu } = useContext(UIContext)

  return (
    <aside className={`bg-neutral-800 py-4 px-2 ${hideMenu ? "hidden": ""}`}>
      <div className="flex justify-center">
        <div className="flex gap-3">
          <Link to={"/get-into"} className={linkStyle}>
            Ingresar
          </Link>
          <Link to={"/cola"} className={linkStyle}>
            Cola
          </Link>
          <Link to={"/create-ticket"} className={linkStyle}>
            create ticket
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Header;
