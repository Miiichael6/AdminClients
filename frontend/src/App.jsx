import Header from "./context/Header";
import UIContextProvider from "./context/UIContext";
import RouterApp from "./router/RouterApp";
import {SocketProvider} from "./context/SocketContext";

function App() {
  return (
    <>
    <SocketProvider>
      <UIContextProvider>
        <Header />
        <RouterApp />
      </UIContextProvider>
    </SocketProvider>
    </>
  );
}

export default App;
