import { useContext,useState } from "react";
import useHideMenu from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";

const CreateTicket = () => {
  useHideMenu(true);
  const [ticket, setTicket] = useState(null)
  const {socket} = useContext(SocketContext)

  const createNewTicket = () => {
    socket.emit("client:request-ticket", null, (ticket) => {
      setTicket(ticket.numero);
    })
  }

  return (
    <>
      <div className="text-center text-xl font-bold">
        touch the button for a new ticket
      </div>

      <button onClick={createNewTicket} className="text-white bg-pink-400 px-3 py-1 rounded-lg">
        give new ticket
      </button>

      {ticket && <div>
        <p>your ticket number</p>
        <p className="text-6xl font-bold">{ticket}</p>
      </div>}
    </>
  );
};

export default CreateTicket;


