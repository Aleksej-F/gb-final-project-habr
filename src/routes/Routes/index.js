import React from 'react';
import {Route, Routes} from "react-router-dom";

import Design  from '../../pages/Design';
import WebDevelopment from '../../pages/WebDevelopment';
import MobileDevelopment from '../../pages/MobileDevelopment';
import Marketing from '../../pages/Marketing';

export const ProjectRoutes  = () => {
  return (
    <Routes>
      {/* <Route exact path='' element={}/> 
      design web_development mobile_development marketing
      */}
      <Route exact path='/design' element={<Design/>}/>
      <Route exact path='/web_development' element={<WebDevelopment/>}/>
      <Route exact path='/mobile_development' element={<MobileDevelopment/>}/>
      <Route exact path='/marketing' element={<Marketing/>}/>
      <Route exact path='/login' element={ <h3>авторизация</h3>}/>
      <Route exact path='/signup' element={<h3>регистрация</h3>}/>
    </Routes>
  )
};