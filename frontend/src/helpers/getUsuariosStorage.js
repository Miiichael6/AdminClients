export const getUsuariosStorage = () => {
  return {
    agente: localStorage.getItem("agente"),
    desktop: localStorage.getItem("desktop"),
  }
}