import React,{useEffect} from 'react';
import Aos from 'aos'

import img from '../Images/pexels-olia-danilevich-4974915.jpg'

const Skills = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div id='skills'>
      <div className="container">
        <h1 data-aos='zoom-in' className="text-center mt-4">SKILLS</h1>
        <hr size="5" className='w-25 mx-auto'/>
        <div className="row py-5">
          <div data-aos='fade-right' className="col-md-6 pr-5">
            <h1 className='mb-4'>Professional Skills</h1>
            <p>
              
            </p>
            <span className="d-flex justify-content-between">
              <span className=""> HTML</span>
              <span>95%</span>
            </span>
            
            <div class="progress">
              <div
                class="progress-bar bg-success"
                style={{ width: "95%" }}
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div><br/>
            <span className="d-flex justify-content-between">
              <span className=""> CSS</span>
              <span>95%</span>
            </span>
            <div class="progress">
              <div
                class="progress-bar bg-info"
                style={{ width: "95%" }}
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div><br/>
            <span className="d-flex justify-content-between">
              <span className=""> BootStrap</span>
              <span>95%</span>
            </span>
            <div class="progress">
              <div
                class="progress-bar bg-danger"
                style={{ width: "95%" }}
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div><br/>
            <span className="d-flex justify-content-between">
              <span className=""> React JS</span>
              <span>90%</span>
            </span>
            <div class="progress">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div><br/>
            <span className="d-flex justify-content-between">
              <span className="">NODE JS</span>
              <span>85%</span>
            </span>
            <div class="progress">
              <div
                class="progress-bar bg-primary"
                style={{ width: "85%" }}
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div data-aos='zoom-in' className="col-md-6 mt-5 pt-5">
              <img className='img-fluid pl-5  rounded' src={img} alt="" srcset=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
