import React from "react";
import useHideMenu from "../hooks/useHideMenu";

const data = [
  {
    ticketNo: 33,
    escritorio: 19,
    agente: "Pedro Fernando",
  },
  {
    ticketNo: 34,
    escritorio: 14,
    agente: "Santiago Vega",
  },
  {
    ticketNo: 35,
    escritorio: 7,
    agente: "Creed Brant",
  },
  {
    ticketNo: 36,
    escritorio: 1,
    agente: "Oscar Martinez",
  },
  {
    ticketNo: 37,
    escritorio: 9,
    agente: "Fabian Gonzalo",
  },
  {
    ticketNo: 38,
    escritorio: 8,
    agente: "Lita Inoko",
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: "Unasuki Libera",
  },
];

const Cola = () => {
  useHideMenu(true);

  return (
    <div className="w-full h-screen flex">
      <section className="w-60">
        <div className="flex flex-wrap p-2">
          {data.map((ticket, index) => (
            <div key={index}>
              <div className="w-52 h-24 bg-cyan-600 my-1 mx-1 rounded-md p-2">
                <p>{ticket.ticketNo}</p>
                <p>{ticket.escritorio}</p>
                <p>{ticket.agente}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full bg-slate-400">
        <div>
          <p className="text-center">Historial</p>
          <div className="flex flex-col items-center">
            {data.slice(3).map((ticket, index) => (
              <div className="my-2 p-2 bg-green-400 w-1/2 rounded-sm" key={index}>
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
