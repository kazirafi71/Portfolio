import React, { useEffect, useState } from 'react';

import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Service from './pages/Service'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import HashLoader

 from "react-spinners/HashLoader";
import {
  css
} from "@emotion/core";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Routing=()=>{
  return(
    <div>
      <Home/>
      <About/>
      <Skills></Skills>
      <Service/>
      <Contact/>
    </div>
  )
}

function App() {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("orange");

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])

  return (
    
    

<div className = {loading ? "App" : '' }  > {
  loading ?
  <HashLoader

color = {
    color
  }
  loading = {
    loading
  }
  size = {
    40
  }
  css={override}
  />:

<BrowserRouter>
  <Navbar/>
  <Routing/>
  <Footer/>
</BrowserRouter>

}

</div>
    
   
  );
}

export default App;
