import React from 'react';
import {Route, Routes} from "react-router-dom";

import Design  from '../../pages/Design';
import WebDevelopment from '../../pages/WebDevelopment';
import MobileDevelopment from '../../pages/MobileDevelopment';
import Marketing from '../../pages/Marketing';
import All from '../../pages/All';
import { LogIn } from '../../components/Login';
import { SignUp } from '../../components/SignUp';
export const ProjectRoutes  = () => {
  return (
    <div className="wrapper">
      <div className="pages-container">
        <Routes>
          
          <Route exact path='/' element={<All/>}/>
          <Route exact path='/design' element={<Design/>}/>
          <Route exact path='/web_development' element={<WebDevelopment/>}/>
          <Route exact path='/mobile_development' element={<MobileDevelopment/>}/>
          <Route exact path='/marketing' element={<Marketing/>}/>
          <Route exact path='/login' element={ <LogIn/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
        </Routes>
      </div>
    </div>
    
  )
};