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
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      {/* <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route  path='/skills' component={Skills}></Route>
        <Route  path='/about' component={About}></Route>
        <Route  path='/service' component={Service}></Route>
        <Route  path='/contact' component={Contact}></Route>
      
      </Switch> */}
      
      
      <Home/>
      <About/>
      <Skills></Skills>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
