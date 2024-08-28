// src/components/Vacancies/VacancyList.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ResourceItemm } from "../Types/Vacanciess";


export const VacancyList: React.FC<ResourceItemm> = ({
  organization_name,
  position,
  price_from,
  price_to,
  type,
  city,
  currency,
  salary,
 organization_icon
}) => {

  return (
    <div className="cards">
      <Link to={"/detailvacancy"}>
        <div className="blocks">
        <div className="organization-icon">
            <img src={organization_icon} alt="img" style={{ width: '50px', height: '50px' }} />
          </div>
          <div className="company">
            <p>Компания</p>
            <h3>{organization_name}</h3>
          </div>
          <div className="dol">
            <p>Должность</p>
            <h3>{position}</h3>
          </div>
          <div className="oclad">
            <p>оклад</p>
            <h3>{`${price_from}- ${price_to} ${currency} в ${salary}`}</h3>
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