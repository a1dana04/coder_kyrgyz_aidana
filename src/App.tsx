import React from 'react';

import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Vacancies from './components/Vacancies';
import Events from './components/Events';
import Video from './components/Video';
import Organizations from './components/Organizations';
import Community from './components/Community';
import Home from './components/Home';
import DetalVideo from './components/DetalVideo';
import DetalOrganiz from './components/DetalOrganiz';

function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/вакансии' element={<Vacancies/>}/>
          <Route path='/мероприятия' element={<Events/>}/>
          <Route path='/видео' element={<Video/>}/>
          <Route path='/организации' element={<Organizations/>}/>
          <Route path='/cooбщество' element={<Community/>}/>
          <Route path='/detalvideo' element={<DetalVideo/>}/>
          <Route path='/detalorganiz' element={<DetalOrganiz/>}/>
        </Routes>
    <Footer/>
  
    </div>
  );
}

export default App;
