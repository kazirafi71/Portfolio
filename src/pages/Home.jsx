import React, { useEffect } from "react";
import img from "../Images/72057312_2532004303700525_1511605660993716224_o.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";
// import Aos from "aos";
// import 'aos/dist/aos.css'
import Typical from "react-typical";

const Home = () => {
//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);
  return (
    <div id="home">
      <div className="container">
        <div className="row py-5">
          <div data-aos="fade-right" className="col-md-6 mt-5 pt-5 text">
            <h1 className='text-warning'>Hi,</h1>
            <h1 className='text-dark'>
              I'am <span className="text-primary">Kazi Rafi</span>
            </h1>
            
            <Typical
              steps={[
              
            "I'am Web Developer" ,1000,
            "MERN Stack Developer" ,1000,
            "I'am Web Designer" ,1000
            ]}
              loop={Infinity}
              wrapper="h1"
            />
            <a type="button" class="btn btn-primary mt-3" href="#contact">
              Contact
            </a>
            <br />
            <br />

            <a
              className="mr-3"
              href="https://www.facebook.com/profile.php?id=100006729403463"
              target="_blank"
            >
              <FacebookIcon style={{ fontSize: 30, color: "black" }} />
            </a>
            <a className="mr-3" href="" target="_blank">
              <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
            </a>
            <a
              className="mr-3"
              href="https://github.com/kazirafi71"
              target="_blank"
            >
              <GitHubIcon style={{ fontSize: 30, color: "black" }} />
            </a>
          </div>
          <div data-aos="fade-left" className="col-md-6 image">
            <img className="rounded mt-4" src={img} height="400px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
