
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { VacancyList } from "./VacancyList";
import loading1 from "../../components/assets/img/loiding.svg";


import { ResourceItemm } from "../Types/Vacanciess";



const Vacancies = ({ count = -1 }) => {
  const nav = useNavigate();
  const  { data, loading } = useFetch()

  if (loading) {
    return (
      <div className="loading" style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
        <img src={loading1} alt="img" />
      </div>
    );
  }

  return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancy">
          <div className="vac">
            <button onClick={() => nav("/addVacan")} className="btn">Добавить вакансии</button>
          </div>
          {data.slice(0, count).map((el: ResourceItemm, index: number) => {
            return (
              <VacancyList
                key={index}
                companyName={el.companyName}
                jobTitle={el.jobTitle}
                paymentType={el.paymentType}
                priceFrom={el.priceFrom}
                priceTo={el.priceTo}
                type={el.type}
                city={el.city}
                currency={el.currency}
                salary={el.salary}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
