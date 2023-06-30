import React, { useContext } from "react";
import useHideMenu from "../hooks/useHideMenu";
import { useState } from "react";
import { useEffect } from "react";
import { SocketContext } from "../context/SocketContext";

const Cola = () => {
  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);
  useHideMenu(true);

  useEffect(() => {
     function getLastTickets () {
       fetch("http://localhost:4000/ultimos")
       .then(data => {
        const result = data.json()
        return result;
      })
       .then(tickets => {
         setTickets(tickets.lastThirdteen);
       })
      

      // setTickets(data.lastThirdteen)
    }

    getLastTickets();
  }, [])
  

  useEffect(() => {
    socket.on("server:ticket-asigned", (asignateds) => {
      console.log(asignateds);
      setTickets(asignateds);
    });

    return () => {
      socket.off("server:ticket-asigned");
    };
  }, [socket]);

  return (
    <div className="w-full h-screen flex">
      <section className="w-60">
        <h1 className="font-bold text-2xl text-center">Atendiendo al Cliente</h1>
        <div className="flex flex-wrap p-2">
          {tickets.slice(0 ,3).map((ticket, index) => (
            <div key={index}>
              <div className="w-52 h-24 bg-cyan-600 my-1 mx-1 rounded-md p-2">
                <p>ticket number: {ticket.numero}</p>
                <p>attended in desk: {ticket.escritorio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full bg-slate-400">
        <div>
          <p className="text-center">Historial</p>
          <div className="flex flex-col items-center flex-wrap">
            {tickets.map((ticket, index) => (
              <div
                className="my-2 p-2 bg-green-400 w-1/2 rounded-sm"
                key={index}
              >
                <p>Ticket Nº{ticket.ticketNo}</p>
                <p>en el escritorio {ticket.escritorio}</p>
                <p>agente {ticket.agente}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cola;
