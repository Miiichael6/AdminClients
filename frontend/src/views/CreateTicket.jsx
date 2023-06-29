import React from "react";
import useHideMenu from "../hooks/useHideMenu";

const CreateTicket = () => {
  useHideMenu(true);

  return (
    <>
      <div className="text-center text-xl font-bold">
        touch the button for a new ticket
      </div>

      <button className="text-white bg-pink-400 px-3 py-1 rounded-lg">
        new ticket
      </button>

      <div>
        <p>su numero</p>
        <p className="text-6xl font-bold">78</p>
      </div>
    </>
  );
};

export default CreateTicket;


