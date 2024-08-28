import React from "react";

const AddVacan = () => {
  return (
    <div id="addVacan">
      <div className="container">
        <div className="addVacan">
          <h1>Добавить новую вакансию</h1>
          <p>
            Вакансия должна относится к сфере информационных технологий и будет
            опубликована после проверки модератором
          </p>
          <h6>
            Организация <span>*</span>
          </h6>
          <input type="" />
          <h6>
            Должность <span>*</span>
          </h6>
          <div className="addVacan--inpt">
            <input type="text" />
            <div className="addVacan--inpt__text">
              <p>Например “Junior Go Developer”</p>
            </div>
          </div>
          <h6>
            Описание вакансии<span>*</span>
          </h6>
          <div className="addVacan--inpt">
            <input type="text" />
            <div className="addvacan--inpt__text">
              <p>
                Здесь необходимо указать условия труда, требования и <br />
                обязанности. Также вы можете указать краткое описание компании,
                <br />
                например: “В дружный отдел дизайна игровой студии ”Bloody Fun”
                требуется проект менеджер со стажем”
              </p>
            </div>
          </div>
          <h6>Telegram</h6>
          <div className="addVacan--inpt">
            <input type="text" />
            <div className="addVacan--input__text">
              <p>
                Не обязательно заполнять все поля для контактов. Например если у
                <br />
                вас нет почты или вы не хотите оставлять свой телеграм, оставьте{" "}
                <br />
                поле пустым.
              </p>
            </div>
          </div>
          <h6>Skype</h6>
          <input type="text" />
          <h6>E-Mail</h6>
          <input type="text" />
          <h6>Телефон</h6>
          <input type="text" />
          <h6>Фото</h6>
          <input type="file" />
          <h6>
            Тип<span>*</span>
          </h6>
          <select>
            <option value="Работа в офисе (только Кыргызстан)">Работа в офисе (только Кыргызстан)</option>
            <option value="saab">Разовая работа (Проект)</option>
            <option value="opel">Удаленная работа (Remote)</option>
            <option value="audi">Переезд (Работа за границей)</option>
            <option value="audi">Стажировка (только Кыргызстан)</option>
          </select>

          <button>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default AddVacan;
