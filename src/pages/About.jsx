import React,{useEffect} from 'react';
import Aos from 'aos'
import img from "../Images/72057312_2532004303700525_1511605660993716224_o.jpg";

const About = () => {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div id='about' className='about'>
            <div className="container mt-5">
            <h1 data-aos="fade-right" className='text-center bd'>About</h1>
            
            <hr size="5" className='w-25 mx-auto'/>
                <div className="row py-5">
                    <div data-aos="fade-right" className="col-md-6 pr-5 ">
                        <img src={img} alt="" srcset="" className='img-fluid rounded'/>
                    </div>
                    <div data-aos="fade-left" className="col-md-6 pl-5  ">
                        <h1 className='mt-5 mb-3 '>I'am  <span className='text-warning'>Kazi Rafi</span> </h1>
                        <p className="lead">
                        Hello I am Rafi, currently studying at Bangladesh University of Professionals. I am an energetic, ambitiuos person aiming to leverage proven creative thinking and gain new skills daily. I believe I am an enthusiastic and focused individual. I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I am eager to be challenged in order to grow and further improve my IT skills.
                        </p>
                        <a href="https://drive.google.com/file/d/1RVqRYFwSvqPAPEkDdTj7gP4usA65WlgT/view?usp=sharing" className='btn btn-outline-primary btn-lg mt-4'>Download CV</a>
                    </div>
                </div>
            </div>
            

            
            
        </div>
    );
};

export default About;