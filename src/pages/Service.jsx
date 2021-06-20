import React, { useEffect } from "react";
import img1 from "../Images/pexels-francesco-ungaro-673648.jpg";
import img2 from "../Images/pexels-iván-rivero-1478259.jpg";
import img3 from "../Images/pexels-kaboompics-com-6444.jpg";
import img4 from "../Images/pexels-lukas-590037.jpg";
import img5 from "../Images/pexels-murtaza-saifee-1684617.jpg";
import img6 from "../Images/pexels-olia-danilevich-4974915.jpg";
import Card from "../components/Card";
import data from "../components/Data";
import { Link } from "react-router-dom";
import Aos from "aos";
import { works } from "./WorkFakeData";

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="service">
      <div className="container my-5">
        <h1 className="text-center my-4 ">MY SERVICE</h1>{" "}
        <hr size="5" className="w-25 mx-auto" />
        <div className="row g-4 mt-5">
          {data.map((val) => {
            return (
              <div data-aos="flip-left" className="col-md-4">
                <Card icon={val.icon} title={val.title} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container py-5">
        <h1 data-aos="fade-left" id="work" className="text-center mt-5">
          MY WORKS
        </h1>
        <hr size="5" className="w-25 mx-auto" />
        <div className="row g-4 mt-5">
          {works.map((val) => {
            return (
              <div data-aos="zoom-in" className="col-md-4">
                <div style={{ height: "200px" }} className="card">
                  <a style={{ color: "black" }} href={val.url}>
                    <div className="card-body text-center">
                      <img
                        className="h-75 w-75"
                        src={val.img}
                        alt=""
                        srcset=""
                      />
                      <h4 className="mt-4" style={{ textDecoration: "none" }}>
                        {val.title}
                      </h4>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
