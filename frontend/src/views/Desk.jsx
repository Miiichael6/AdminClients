import React from "react";
import useHideMenu from "../hooks/useHideMenu";

const Desk = () => {
  useHideMenu(false)

  return (
    <div>
      <h1 className="text-xl">Desktop</h1>

      <p>you are in the desk number ...</p>


      <button className="px-3 py-1 rounded-md bg-red-500 text-white font-medium">salir</button>

      <div>
        <p>client is being attended: <span className="text-xl font-bold text-purple-600">55</span></p>
      </div>

      <div>
        <button className="px-3 py-1 rounded-md bg-cyan-600 font-medium text-white">next client</button>
      </div>
    </div>
  );
};

export default Desk;
