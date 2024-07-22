import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { VacancyList } from "./VacancyList";

const Vacancies = () => {
  const {data,loading} = useFetch()
  console.log(data, loading);
  
  return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancy">
          <div className="vac">
            <button className="btn">Добавить вакансии</button>
          </div>
           {data.map((job:any, index: number) => {
            return <VacancyList
            key={index}
            companyName={job.organization_name}
            jobTitle={job.position}
            paymentType={job.paymentType}
            priceFrom={job.price_from}
            priceTo={job.price_to}
            type={job.type}
            city={job.city}
            currency={job.currency}
            salary={job.salary}
          />

           })}
         
        
          
         
        
         
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
