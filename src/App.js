import './App.css';
import React from'react';
// import{UserName} from "./Jotai/UserName";
// import{UserDepartment} from "./Jotai/UserDepartment";
// import{UserAge} from "./Jotai/UserAge";
// import{UserEmail} from "./Jotai/UserEmail";
// import{UserLocation} from "./Jotai/UserLocation";
import {Routes, Route } from 'react-router-dom';
// import{Summary} from "./Jotai/Summary";
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { UserLogin } from "./UserLoginSimulation/UserLogin";
// import { WelcomePage } from "./UserLoginSimulation/WelcomePage";
import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';
// import HomePage from "./HomePage"

function App() {

  return (
    
   <div className="App">
   <BrowserRouter>
    <Routes>
    <Route path="/cardAtom" element={<div><ComponentA/><ComponentB/>
    </div>}>
   </Route>
    {/* <Route path='/' element={<UserLogin/>}></Route>
   <Route path='/WelcomePage' element={<WelcomePage/>}></Route> 
   <Route path="/" element={<UserName/>}></Route>
   <Route path="/UserDepartment"element={<UserDepartment/>}></Route>
   <Route path="/UserLocation" element={<UserLocation/>}></Route>
   <Route path="/Summary" element={<Summary/>}></Route>*/}
   </Routes>
   </BrowserRouter>
   </div>
   )};
export default App;
