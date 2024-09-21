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
import NewDetalOrg from './components/NewDetalOrg';
import DetalMerop from './components/DetalMerop';
import DetailVacancy from './components/DetailVacancy';
import Auth from './components/Auth';
import AddVacan from './components/AddVacan';
import AddEvents from './components/AddEvents';
import AddVideo from './components/AddVideo';
import RouterProtector from './components/RouterProtect';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

function App() {
  
  
  return (
    <QueryClientProvider client={queryClient}>
<div className="App">
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/vacancy' element={<Vacancies/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/video' element={<Video/>}/>
          <Route path='/organization' element={<Organizations/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/detalvideo' element={<DetalVideo/>}/>
          <Route path='/detalorganiz' element={<DetalOrganiz/>}/>
          <Route path='/newDetalOrg' element={<NewDetalOrg/>}/>
          <Route path='/detalmerop' element={<DetalMerop/>}/>
          <Route path='/detailvacancy' element={<DetailVacancy/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/addVacan' element={<RouterProtector> <AddVacan/></RouterProtector> }/>
          <Route path='/addEvents' element={<RouterProtector> <AddEvents/></RouterProtector> }/>
          <Route path='/addVideo' element={<RouterProtector><AddVideo/></RouterProtector> }/>
        </Routes>
    <Footer/>
  
    </div>
    </QueryClientProvider>
    
  );
}

export default App;
