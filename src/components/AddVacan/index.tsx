import React, { useState } from 'react';
import { API } from '../../constants/intex';
import axios from 'axios';

const AddVacan = () => {
    const [vacancyState, setVacancyState] = useState({
        nameVacancy: "",
        salaryVacancy: "",
        priceFrom: "",
        nameCompany: "",
        priceTo: "",
        address: "",
        phone: "",
        email: ""
    });

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVacancyState({
            ...vacancyState,
            [name]: value
        });
    };

    const handleAddVacancy = async (e: React.FormEvent) => {
        e.preventDefault();
        const {
            nameVacancy,
            salaryVacancy,
            priceFrom,
            nameCompany,
            priceTo,
            address,
            phone,
            email
        } = vacancyState;

        try {
            const response = await axios.post(`${API}/jobs`, {
                organization_name: nameCompany,
                price_from: Number(priceFrom),
                price_to: Number(priceTo),
                currency: 'currency',
                position: nameVacancy,
                city: address,
                salary: salaryVacancy,
                phone: phone,
                type: 'type',
                id: Math.random(),
                slug: '',
                created_at: '',
                updated_at: '',
                is_archived: true,
                gradient: 0,
                workday: '',
                organization_icon: '',
                organization_icon_formats: [null]
            });

            if (response.data.success) {
                console.log(response.data);

                setVacancyState({
                    nameVacancy: "",
                    salaryVacancy: "",
                    priceFrom: "",
                    nameCompany: "",
                    priceTo: "",
                    address: "",
                    phone: "",
                    email: ""
                });
            }

            alert(response.data.message);
        } catch (error) {
            alert("Не удалось добавить вакансию");
        }
    };

    return (
        <div id='addVacan'>
            <div className="container">
                <form className="addVacan" onSubmit={handleAddVacancy}>
                    <h1>Добавить вакансию</h1>
                    <div className="addVacan--input">
                        <div className="addVacan--input__inpt">
                            <input
                                name="nameCompany"
                                onChange={inputChangeHandler}
                                value={vacancyState.nameCompany}
                                type="text"
                                placeholder="Название компании"
                            />
                            <input
                                name="salaryVacancy"
                                onChange={inputChangeHandler}
                                value={vacancyState.salaryVacancy}
                                type="text"
                                placeholder="Зарплата"
                            />
                            <input
                                name="priceTo"
                                onChange={inputChangeHandler}
                                value={vacancyState.priceTo}
                                type="text"
                                placeholder="Price to"
                            />
                            <input
                                name="priceFrom"
                                onChange={inputChangeHandler}
                                value={vacancyState.priceFrom}
                                type="text"
                                placeholder="Price from"
                            />
                        </div>
                        <div className="addVacan--input__inpt">
                            <input
                                name="nameVacancy"
                                onChange={inputChangeHandler}
                                value={vacancyState.nameVacancy}
                                type="text"
                                placeholder="Тип вакансии"
                            />
                            <input
                                name="address"
                                onChange={inputChangeHandler}
                                value={vacancyState.address}
                                type="text"
                                placeholder="Адрес"
                            />
                            <input
                                name="phone"
                                onChange={inputChangeHandler}
                                value={vacancyState.phone}
                                type="text"
                                placeholder="Телефон"
                            />
                            <input
                                name="email"
                                onChange={inputChangeHandler}
                                value={vacancyState.email}
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <button type="submit">Добавить</button>
                </form>
            </div>
        </div>
    );
};

export default AddVacan;
