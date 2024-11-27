import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CrudUsuarios from './components/CrudUsuarios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="usuarios" element={<CrudUsuarios/>} />
      <Route path="sobre" element={<About/>} />
    </Routes>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
