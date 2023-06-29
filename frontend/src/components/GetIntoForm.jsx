import React, { useState } from "react";
import { BsFillTicketDetailedFill } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";

const GetIntoForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    desktop: ""
  });

  const handleInputsChange = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setForm({ ...form, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    if(!form.desktop.trim() && !form.desktop.trim()){
      console.log("sin data")
      return
    }

    localStorage.setItem("agente", form.name);
    localStorage.setItem("desktop", form.desktop);
    
    navigate("/desk")
  };

  return (
    <form className="flex justify-center" onSubmit={(e) => handlerSubmit(e)}>
      <div className="bg-slate-400 p-3 rounded-md">
        <div>
          <label htmlFor="name">
            Nombre
            <span className="text-red-700">*</span>
          </label>
          <input
            onChange={handleInputsChange}
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
              onChange={handleInputsChange}
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
