import axios from "axios";
import React, { useState } from "react";
import { API } from "../../constants/intex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEvents = () => {
  const [events, setEvents] = useState("");
  const [data, setData] = useState("");
  const [address, setAddress] = useState("");
  const [nameOrgan, setNameOrgan] = useState("");

  const handleAddVacancy = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!events || !data || !address || !nameOrgan) {
      toast.error("Пожалуйста, заполните все поля.");
      return;
    }

    try {
      const response = await axios.post(`${API}/events`, {
        id: 0,
        name: events,
        cover: "string",
        slug: "string",
        location: address,
        created_at: "string",
        updated_at: "string",
        date: data,
        gradient: 0,
        event_type: "string",
        button_type: "string",
        organization_name: nameOrgan,
        cover_formats: [null],
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setEvents("");
        setData("");
        setAddress("");
        setNameOrgan("");
      } else {
        if (response.data.message) {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error("error", error);
      toast.error("Не удалось добавить ");
    }
  };

  return (
    <div id="addEvents">
      <div className="container">
        <form className="addEvents" onSubmit={handleAddVacancy}>
          <h1>Добавить вакансию</h1>
          <div className="addEvents--input">
            <div className="addEvents--input__inpt">
              <input
                onChange={(e) => setData(e.target.value)}
                value={data}
                type="date"
                placeholder=""
              />
              <input
                onChange={(e) => setEvents(e.target.value)}
                value={events}
                type="text"
                placeholder="Назва́ние"
              />
            </div>
            <div className="addEvents--input__inpt">
              <input
                onChange={(e) => setNameOrgan(e.target.value)}
                value={nameOrgan}
                type="text"
                placeholder="Организация"
              />
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                type="text"
                placeholder="Локация "
              />
            </div>
          </div>
          <button type="submit">Добавить</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddEvents;
