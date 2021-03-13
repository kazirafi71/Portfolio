import React,{useEffect} from "react";
import img1 from '../Images/pexels-francesco-ungaro-673648.jpg'
import img2 from '../Images/pexels-iván-rivero-1478259.jpg'
import img3 from '../Images/pexels-kaboompics-com-6444.jpg'
import img4 from '../Images/pexels-lukas-590037.jpg'
import img5 from '../Images/pexels-murtaza-saifee-1684617.jpg'
import img6 from '../Images/pexels-olia-danilevich-4974915.jpg'
import Card from '../components/Card'
import data from '../components/Data'
import { Link } from "react-router-dom";
// import Aos from 'aos'


const Service = () => {
//   useEffect(()=>{
//     Aos.init({duration:3000})
// },[])
  return (
    <div id='service'>
        <div  className="container my-5">
            <h1 className='text-center my-4 '>MY SERVICE</h1> <hr size="5" className='w-25 mx-auto'/>
            <div className="row g-4 mt-5">
                {data.map(val=>{
                    return(<div data-aos="flip-left" className="col-md-4">
                    <Card
                    icon={val.icon}
                    title={val.title}
                    />
                </div>)
                })}
                
            </div>
        </div>
      <div  className="container py-5">
          <h1 data-aos="fade-left" id="work" className='text-center mt-5'>MY WORKS</h1> <hr size="5" className='w-25 mx-auto'/>
        <div className="row g-4 mt-5">
          <div  className="col-md-4">
            <div className="card">
            <a href='https://insta-clone-rafi-71.herokuapp.com/login'>
              <div className="card-body text-center">
             
              <img className='img-fluid' src='https://assets.pcmag.com/media/images/598224-631328-how-to-add-music-to-an-instagram-story.jpg' alt="" srcset=""/>
              
              <h2 className='' style={{textDecoration: "none"}}>Instagram-clone</h2>
              
              </div>
              </a>
            </div>
          </div>
          <div  className="col-md-4">
            <div className="card">
            <a href='https://kazirafi71.github.io/amazon-clone-font/'>
              <div className="card-body text-center">
             
              <img className='img-fluid' src='data:image/jpeg;base64,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' alt="" srcset=""/>
              
              <h2 className='' style={{textDecoration: "none"}}>Amazon-clone</h2>
              
              </div>
              </a>
            </div>
          </div>
          <div  className="col-md-4 hello">
            <a href='https://kazirafi71.github.io/amazon-clone-font/'>
          <img className='img-fluid hello' src={img3} alt="" srcset=""/>
          </a>
          </div>
          <div  className="col-md-4"><img className='img-fluid' src={img2} alt="" srcset=""/></div>
          <div  className="col-md-4"><img className='img-fluid' src={img4} alt="" srcset=""/></div>
          <div  className="col-md-4"><img className='img-fluid' src={img5} alt="" srcset=""/></div>
          {/* <div  className="col-md-4"><img className='img-fluid' src={img6} alt="" srcset=""/></div> */}
        </div>
      </div>
    </div>
  );
};

export default Service;
