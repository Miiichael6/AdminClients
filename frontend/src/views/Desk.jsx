import React, { useContext, useState } from "react";
import useHideMenu from "../hooks/useHideMenu";
import { Navigate, useNavigate } from "react-router-dom";
import { getUsuariosStorage } from "../helpers/getUsuariosStorage";
import { SocketContext } from "../context/SocketContext";

const Desk = () => {
  useHideMenu(false);
  const { socket } = useContext(SocketContext);
  const [usuario] = useState(getUsuariosStorage());
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();

  const exitOfDesktop = () => {
    localStorage.removeItem("agente");
    localStorage.removeItem("desktop");
    localStorage.clear();
    navigate("/get-into");
  };

  const nextTicketToAttend = () => {
    socket.emit("client:next-ticket-to-attend", usuario, (ticket) => {
      setTicket(ticket);
    });
  };

  if (!usuario.agente || !usuario.desktop) {
    return <Navigate to="/get-into" />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{usuario.agente}</h1>

      <p>
        you are in the desk number{" "}
        <span className="text-4xl font-bold">{usuario.desktop}</span>{" "}
      </p>

      <button
        onClick={exitOfDesktop}
        className="px-3 py-1 rounded-md bg-red-500 text-white font-medium"
      >
        salir
      </button>

      {ticket && <div>
        <p>
          client is being attended:{" "}
          <span className="text-xl font-bold text-purple-600">
            {ticket.numero}
          </span>
        </p>
      </div>}

      <div>
        <button
          onClick={nextTicketToAttend}
          className="px-3 py-1 rounded-md bg-cyan-600 font-medium text-white"
        >
          next client
        </button>
      </div>
    </div>
  );
};

export default Desk;
