import TicketList from "./ticket-list.js";

export default class Sockets {
  constructor(io) {
    this.io = io;

    // crear instacia tiket list
    this.ticketList = new TicketList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("cliente conectado");

      socket.on("client:request-ticket", (_data, callback) => {
        // nuevo ticket
        const newTicket = this.ticketList.crearTicket();
        callback(newTicket);
      });

      socket.on(
        "client:next-ticket-to-attend",
        ({ agente, desktop }, callback) => {
          const yourTicket = this.ticketList.asignarTicket(agente, desktop);
          callback(yourTicket);

          this.io.emit("server:ticket-asigned", this.ticketList.ultimos13);
        }
      );
    });
  }
}
