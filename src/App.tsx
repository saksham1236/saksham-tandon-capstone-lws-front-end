import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, ButtonProps } from "@fluentui/react-components";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Nabar/Navbar';
import Home from './pages/Home/Home';

function App() {

  const serverUrl = `http://localhost:8080`
  const labelList = [
    {label: `Home`, link: `/`},
    {label: `About`, link: `/about`}
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar labelList={labelList} />
        </header>

        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/about" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
