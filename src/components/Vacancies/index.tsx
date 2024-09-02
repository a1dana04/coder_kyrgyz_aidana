import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { VacancyList } from "./VacancyList";
import loading1 from "../../components/assets/img/loiding.svg";

import { ResourceItemm } from "../Types/Vacanciess";

const Vacancies = ({ count = -1 }) => {
  const nav = useNavigate();
  const { data, loading } = useFetch();

  if (loading) {
    return (
      <div
        className="loading"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={loading1} alt="img" />
      </div>
    );
  }

  return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancy">
          <div className="vac">
            <button onClick={() => nav("/addVacan")} className="btn">
              Добавить вакансии
            </button>
          </div>
          {data.slice(0, count).map((el: ResourceItemm, index: number) => {
            return (
              <VacancyList
                key={index}
                organization_name={el.organization_name}
                position={el.position}
                paymentType={el.paymentType}
                price_from={el.price_from}
                price_to={el.price_to}
                type={el.type}
                city={el.city}
                currency={el.currency}
                salary={el.salary}
                organization_icon={el.organization_icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
