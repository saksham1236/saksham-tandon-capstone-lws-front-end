import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, ButtonProps } from "@fluentui/react-components";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Nabar/Navbar';
import Home from './pages/Home/Home';
import { Watchlist } from './components/WatchList/Watchlist';

function App() {

  const serverUrl = `http://localhost:8080`
  const labelList = [
    {label: `Home`, link: `/`},
    {label: `Search a Company`, link: `/search`}
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar labelList={labelList} />
        </header>

        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/search" element = {<Watchlist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
