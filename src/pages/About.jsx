import React,{useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from '../Images/87626630_2617805838453704_2702793984178126848_o (1).jpg'
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
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex quo commodi veritatis non aliquam incidunt exercitationem illo earum ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ipsam iste eveniet facilis quasi. Id vero quis tempora, maiores officia obcaecati maxime deleniti beatae dolorum exercitationem corrupti ex delectus rem!</p>
                        <a href="" className='btn btn-outline-primary btn-lg mt-4'>Download CV</a>
                    </div>
                </div>
            </div>
            

            
            
        </div>
    );
};

export default About;