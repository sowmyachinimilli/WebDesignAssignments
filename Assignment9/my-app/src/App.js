import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Jobs from './Pages/Jobs';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
          {/* <Login/> */}
        <Routes>
          <Route path = "/" element = {<Login/>}></Route>
          <Route path = "/Home" element = {<Home/>}></Route>
          <Route path = "/Jobs" element = {<Jobs/>}></Route>
          <Route path = "/about" element = {<About/>}></Route>
          <Route path = "/contact" element = {<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
