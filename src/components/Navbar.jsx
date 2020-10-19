import React from "react";



const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top fixed-top">
          <div className="container">
  <a class="navbar-brand" href="#">Kazi Rafi</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <a class="nav-link active" href="#">Home</a>
      <a class="nav-link" href="">About</a>
      <a class="nav-link" href="#">Skills</a>
      <a class="nav-link" href="#service">Service</a>
      <a class="nav-link" href="#">Contact</a>
    </div>
  </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
