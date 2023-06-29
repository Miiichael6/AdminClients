import { v4 as uuid } from "uuid";

export default class Ticket {
  constructor(numero) {
    this.id = uuid();
    this.numero = numero;
    this.escritorio = null;
    this.agente = null;
  }
}
