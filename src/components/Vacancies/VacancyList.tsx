// src/components/Vacancies/VacancyList.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ResourceItemm } from "../Types/Vacanciess";


export const VacancyList: React.FC<ResourceItemm> = ({
  companyName,
  jobTitle,
  paymentType,
  priceFrom,
  priceTo,
  type,
  city,
  currency,
  salary,
}) => {
  return (
    <div className="cards">
      <Link to={"/detailvacancy"}>
        <div className="blocks">
          <div className="company">
            <p>Компания</p>
            <h3>{companyName}</h3>
          </div>
          <div className="dol">
            <p>Должность</p>
            <h3>{jobTitle}</h3>
          </div>
          <div className="oclad">
            <p>оклад</p>
            <h3>{`${priceFrom}- ${priceTo} ${currency} в ${paymentType}`}</h3>
          </div>
          <div className="office">
            <p>тип</p>
            <h3>{`${type}/ ${city}`}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};
