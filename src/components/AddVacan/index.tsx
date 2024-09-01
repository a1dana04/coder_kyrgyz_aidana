import axios from "axios";
import React, { useState } from "react";
import { API } from "../../constants/intex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";



interface VacancyState {
  nameVacancy: string;
  salaryVacancy: string;
  priceFrom: string;
  priceTo: string;
  nameCompany: string;
  address: string;
  phone: string;
  email: string;
  icon: string;
  workday: string;
  skype: string;
  telegram: string;
  vacancyType: string;
  currency: string;
  paymentPeriod: string;
}

const AddVacan: React.FC = () => {
    const nav = useNavigate()
  const [vacancyState, setVacancyState] = useState<VacancyState>({
    nameVacancy: "",
    salaryVacancy: "",
    priceFrom: "",
    priceTo: "",
    nameCompany: "",
    address: "",
    phone: "",
    email: "",
    icon: "",
    workday: "",
    skype: "",
    telegram: "",
    vacancyType: "",
    currency: "",
    paymentPeriod: "",
  });

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setVacancyState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddVacancy = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      nameVacancy,
      salaryVacancy,
      priceFrom,
      priceTo,
      nameCompany,
      address,
      phone,
      email,
      icon,
      workday,
      skype,
      telegram,
      vacancyType,
      currency,
      paymentPeriod,
    } = vacancyState;

    if (
      !nameVacancy || 
      !salaryVacancy || 
      !priceFrom || 
      !priceTo || 
      !nameCompany ||
      !currency || 
      !phone || 
      !email || 
      !workday || 
      !telegram ||
      !skype || 
      !icon || 
        !vacancyType 
    ) {
      toast.error("Пожалуйста, заполните все обязательные поля.");
      return;
    }

   

    try {
      const response = await axios.post(`${API}/jobs`, {
        organization_name: nameCompany,
        price_from: Number(priceFrom),
        price_to: Number(priceTo),
        currency: currency,
        position: nameVacancy,
        city: address,
        salary: salaryVacancy,
        phone: phone,
        type: vacancyType,
        id: Math.random(),
        slug: "",
        created_at: "",
        updated_at: "",
        is_archived: true,
        gradient: 0,
        workday: "",
        organization_icon: icon,
        organization_icon_formats: [null],
      });
      if (response.data.success) {
        toast.success(response.data.message);

        setTimeout(() => {
         nav("/vacancy")
        }, 2000)
        setVacancyState({
          nameVacancy: "",
          salaryVacancy: "",
          priceFrom: "",
          priceTo: "",
          nameCompany: "",
          address: "",
          phone: "",
          email: "",
          icon: "",
          workday: "",
          skype: "",
          telegram: "",
          vacancyType: "",
          currency: "",
          paymentPeriod: "",
        });
      } else {
        toast.error(response.data.message || "Не удалось добавить вакансию");
      }
    } catch (error:any) {
      toast.error(error.response.data.message || "Не удалось добавить вакансию");
  
      
    }
  };

  return (
    <div id="addVacan">
      <div className="container">
        <form className="addVacan" onSubmit={handleAddVacancy}>
          <h1>Добавить новую вакансию</h1>
          <p>
            Вакансия должна относится к сфере информационных технологий и будет
            опубликована после проверки модератором
          </p>

          <h6>
            Организация <span>*</span>
          </h6>
          <input
            name="nameCompany"
            onChange={inputChangeHandler}
            value={vacancyState.nameCompany}
            type="text"
            placeholder="Название компании"
          />

          <h6>
            Должность <span>*</span>
          </h6>
          <div className="addVacan--inpt">
            <input
              name="nameVacancy"
              onChange={inputChangeHandler}
              value={vacancyState.nameVacancy}
              type="text"
              placeholder="Тип вакансии"
            />
            <div className="addVacan--inpt__text">
              <p>Например “Junior Go Developer”</p>
            </div>
          </div>

          <h6>
            Описание вакансии<span>*</span>
          </h6>
          <div className="addVacan--inpt">
            <input
              name="workday"
              onChange={inputChangeHandler}
              value={vacancyState.workday}
              type="text"
              placeholder="Описание вакансии"
            />
            <div className="addVacan--inpt__text">
              <p>
                Здесь необходимо указать условия труда, требования и
                обязанности. Также вы можете указать краткое описание компании,
                например: “В дружный отдел дизайна игровой студии ”Bloody Fun”
                требуется проект менеджер со стажем”
              </p>
            </div>
          </div>

          <h6>Telegram</h6>
          <input
            name="telegram"
            onChange={inputChangeHandler}
            value={vacancyState.telegram}
            type="text"
            placeholder="Telegram"
          />

          <h6>Skype</h6>
          <input
            name="skype"
            onChange={inputChangeHandler}
            value={vacancyState.skype}
            type="text"
            placeholder="Skype"
          />

          <h6>E-Mail</h6>
          <input
            name="email"
            onChange={inputChangeHandler}
            value={vacancyState.email}
            type="text"
            placeholder="Email"
          />

          <h6>Телефон</h6>
          <input
            name="phone"
            onChange={inputChangeHandler}
            value={vacancyState.phone}
            type="text"
            placeholder="Телефон"
          />

          <h6>Фото</h6>
          <input
            name="icon"
            onChange={inputChangeHandler}
            value={vacancyState.icon}
            type="text"
          />

          <h6>Тип</h6>
          <select
            name="vacancyType"
            onChange={inputChangeHandler}
            value={vacancyState.vacancyType}
          >
            <option value="Работа в офисе (только Кыргызстан)">
              Работа в офисе (только Кыргызстан)
            </option>
            <option value="Разовая работа (Проект)">
              Разовая работа (Проект)
            </option>
            <option value="Удаленная работа (Remote)">
              Удаленная работа (Remote)
            </option>
            <option value="Переезд (Работа за границей)">
              Переезд (Работа за границей)
            </option>
            <option value="Стажировка (только Кыргызстан)">
              Стажировка (только Кыргызстан)
            </option>
          </select>

          <h6>Оклад</h6>
          <input
            name="priceFrom"
            onChange={inputChangeHandler}
            value={vacancyState.priceFrom}
            type="text"
            placeholder="Сумма от"
          />
          <input
            name="priceTo"
            onChange={inputChangeHandler}
            value={vacancyState.priceTo}
            type="text"
            placeholder="Сумма до"
          />
          <input
            name="currency"
            onChange={inputChangeHandler}
            value={vacancyState.currency}
            type="text"
            placeholder="Валюта"
          />
          <input
            name="salaryVacancy"
            onChange={inputChangeHandler}
            value={vacancyState.salaryVacancy}
            type="text"
            placeholder="Период оплаты"
          />

          <button type="submit">Сохранить</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddVacan;
