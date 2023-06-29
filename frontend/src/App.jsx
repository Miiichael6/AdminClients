import Header from "./context/Header";
import UIContextProvider from "./context/UIContext";
import RouterApp from "./router/RouterApp";

function App() {
  return (
    <>
      <UIContextProvider>
        <Header />
        <RouterApp />
      </UIContextProvider>
    </>
  );
}

export default App;
