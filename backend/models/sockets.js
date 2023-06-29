export default class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("cliente conectado");
      socket.on("mensaje-al-servidor", (data) => {
        // Al usar socket.emit(...) se envia solo al servidor con el que
        // se interactua
        // socket.emit(...)

        // Al usar "IO" , se envia a todos los clientes conectados
        this.io.emit("mensaje-from-server", data);
      });
    });
  }
}
