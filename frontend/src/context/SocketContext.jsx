import { createContext } from "react";
import useSocket from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online }= useSocket("http://localhost:4000")

  const data = {
    socket,
    online
  }

  return (
    <SocketContext.Provider value={data}>
      {children}
    </SocketContext.Provider>
  );
};
