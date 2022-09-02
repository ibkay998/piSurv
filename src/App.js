import React,{useState,useEffect,useRef} from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Switch,
  Route,} from "react-router-dom";
import Surveys from './routes/Surveys';
import useAuth from './hooks/useAuth'
import Header from './components/header'
import Dashboard from './components/dashboard'
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/reducer';

function App() {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if ( data !== null ) setAuth(JSON.parse(data));
  }, []);

  return (
    
    <div className="w-full bg-white h-screen ">
      <header className=" w-full flex-col">
        <Header/>
      </header>
      <div className = "h-full">
      <StateProvider initialState={initialState}
          reducer={reducer}>
        <Dashboard/>
      </StateProvider>
      
      </div>
      
      
      
    </div>
  );
}

export default App;
