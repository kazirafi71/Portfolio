
import React from "react";
import {Link} from 'react-scroll';



const Navbar = () => {
  return (
    <div>
      <nav class="nav bg-primary bg-light fixed-top navbar navbar-expand-lg navbar-light">
          <div className="container">
  <a class="navbar-brand" href="#">Kazi Rafi</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      
      <a  class="nav-link  " href="#">Home</a>
      <a  class="nav-link " href="#about">About</a>
      <a  class="nav-link" href="#skills">Skills</a>
      <a  class="nav-link" href="#service">Service</a>
      <a  class="nav-link" href="#contact">Contact</a>
    </div>
  </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
