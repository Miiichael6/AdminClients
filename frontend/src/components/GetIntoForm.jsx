import React, { useState } from "react";
import { BsFillTicketDetailedFill } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";

const GetIntoForm = () => {
  const navigate = useNavigate();
  const [form, seForm] = useState({});

  const handlerSubmit = (e) => {
    e.preventDefault();

    navigate("/desk");
  };

  return (
    <form className="flex justify-center" onSubmit={(e) => handlerSubmit(e)}>
      <div className="bg-slate-400 w-1/2">
        <div>
          <label htmlFor="name">
            Nombre
            <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            name="name"
            key="name"
            id="name"
            className="border-b-slate-950 border-b-2 rounded-sm"
          />
        </div>

        <div>
          <label htmlFor="desktop">
            desktop <span className="text-red-700">*</span>
            <input
              type="desktop"
              name="desktop"
              key="desktop"
              id="desktop"
              className="border-b-slate-950 border-b-2 rounded-sm"
            />
          </label>
        </div>
        <button className="p-2 bg-lime-400 rounded-md m-2 font-medium">
          <BsFillTicketDetailedFill className="inline" /> Ingresar
        </button>
      </div>
    </form>
  );
};

export default GetIntoForm;
