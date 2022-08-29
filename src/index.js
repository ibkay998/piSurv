import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,
  Route,} from "react-router-dom";
import Surveys from "./routes/Surveys";
import CombinedComponent from './components/CombinedComponent';
import CompanySurveys from './routes/CompanySurveys';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateSurveyComponent from './components/CreateSurveyComponent';
import CreateForm from './routes/CreateForm';
import Wordle from './routes/wordle';
import Wordle2 from './routes/wordle2';
import Register from "./routes/Register";
import Login from "./routes/Login";
import { StateProvider } from './components/StateProvider';

import {CookiesProvider} from 'react-cookie'
import ListSurveyComponent from "./components/ListSurvey"
import IndividualSurveyComponent from './components/IndividualSurveyComponent';
import Unauthorized from './components/Unauthorized';
import UserForm from './routes/UserForm'
import History from './routes/History'
import Home from './routes/Home'
import {AuthProvider} from './context/AuthProvider';
import RequireAuth from './components/RequireAuth';



function Router (){
  return(
    <CookiesProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
              <Route path = "/" element={<Home/>}/>
              <Route path="/unauthorized" element={<Unauthorized />}/>
              <Route path = "/login" element={<Login/>}/>
              <Route path = "/register" element={<Register/>}/>

              <Route element={<RequireAuth/>}>
                <Route path = "company/*" element={<App/>}>
                  <Route path="overview" element = {<CreateSurveyComponent/>}/>
                  <Route path ="history" element = {<History company={true}/>}/>
                  <Route path="create-survey/:id" element={<CreateForm call={false}/>}/>
                  <Route path ="survey" element={<ListSurveyComponent company={true}/>}/>
                  <Route path=":id" element={<IndividualSurveyComponent/>}/>
                </Route>
              </Route>
              
              <Route  path = "user" element={<App/>}>
                <Route path="overview" element = {<CombinedComponent/>}/>
                <Route path="survey" element = {<ListSurveyComponent company={false}/>}/>
                <Route path=":id" element={<UserForm/>}/>
                <Route path="history" element={<History company={false}/>}/>
              </Route>
          </Routes>
        </AuthProvider>
          
    </BrowserRouter>
    </CookiesProvider>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router/>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
