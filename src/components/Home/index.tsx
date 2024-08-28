import React from 'react';
import Events from '../Events';
import Vacancies from '../Vacancies';
import Video from '../Video';

const Home = () => {
    return (
        <div id='home'>
      
            <div className="home">
              <div className="container">
                <h1>Последние мероприятия</h1>
              </div>
                <Events count={1}/>
               <div className="container">
                <h1>Последние вакансии</h1>
               </div>
                <Vacancies count={4} />
              <div className="container">
                <h1>Последние видео</h1>
              </div>
                <Video count={2}/>
           
        </div>
        </div>
    );
};

export default Home;