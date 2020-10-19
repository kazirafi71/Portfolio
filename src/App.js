import React from 'react';

import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Service from './pages/Service'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route,Switch } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      
      
      <Navbar/>
      
      <Home/>
      <About/>
      <Skills></Skills>
      <Service/>
      <Contact/>
      {/* <Skills></Skills>
      <Service/>
      <Contact/> */}
      <Footer/>
    </div>
    
   
  );
}

export default App;
