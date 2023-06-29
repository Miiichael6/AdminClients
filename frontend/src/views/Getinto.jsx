import { useState } from "react";
import GetIntoForm from "../components/GetIntoForm";
import useHideMenu from "../hooks/useHideMenu";
import { getUsuariosStorage } from "../helpers/getUsuariosStorage";
import { Navigate } from "react-router-dom";

const Getinto = () => {
  useHideMenu(false);
  const [usuario] = useState(getUsuariosStorage());

  if (usuario.agente && usuario.desktop) {
    return <Navigate to="/desk" />;
  }

  return (
    <div>
      <GetIntoForm />
    </div>
  );
};

export default Getinto;
