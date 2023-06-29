import { v4 as uuid } from "uuid";

export default class Ticket {
  constructor() {
    this.id = uuid();
    this.numero = null;
    this.escritorio = null;
    this.agente = null;
  }
}
