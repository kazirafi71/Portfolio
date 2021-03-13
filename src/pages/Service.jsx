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
             
              <img className='h-75 w-75' src='https://assets.pcmag.com/media/images/598224-631328-how-to-add-music-to-an-instagram-story.jpg' alt="" srcset=""/>
              
              <h2 className='' style={{textDecoration: "none"}}>Instagram-clone</h2>
              
              </div>
              </a>
            </div>
          </div>
          <div  className="col-md-4">
            <div className="card">
            <a href='https://kazirafi71.github.io/amazon-clone-font/'>
              <div className="card-body text-center">
             
              <img className=' h-75 w-75' src='data:image/jpeg;base64,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' alt="" srcset=""/>
              
              <h2 className='' style={{textDecoration: "none"}}>Amazon-clone</h2>
              
              </div>
              </a>
            </div>
          </div>
          <div  className="col-md-4">
            <div className="card">
            <a href='https://mern-crud-71.herokuapp.com/'>
              <div className="card-body text-center">
             
              <img className='h-75 w-75' src='data:image/jpeg;base64,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' alt="" srcset=""/>
              
              <h2 className='' style={{textDecoration: "none"}}>CRUD Application</h2>
              
              </div>
              </a>
            </div>
          </div>
        
          {/* <div  className="col-md-4">
            <div className="card">
            <a href='https://insta-clone-rafi-71.herokuapp.com/login'>
              <div className="card-body text-center">
             
              <img className='h-75 w-75' src='https://assets.pcmag.com/media/images/598224-631328-how-to-add-music-to-an-instagram-story.jpg' alt="" srcset=""/>
              
              <h2 className='' style={{textDecoration: "none"}}>Instagram-clone</h2>
              
              </div>
              </a>
            </div>
          </div> */}
          <div  className="col-md-4">
            <div className="card">
            <a href='https://reactweb2.herokuapp.com/'>
              <div className="card-body text-center">
             
              <img className='h-75 w-75' src='https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png' alt="" srcset=""/>
              
              <h2 className='' style={{textDecoration: "none"}}>React Simple Website</h2>
              
              </div>
              </a>
            </div>
          </div>
          <div  className="col-md-4">
            <div className="card">
            <a href='https://reactweb71.herokuapp.com/'>
              <div className="card-body text-center">
             
              <img className=' mb-3 p-5' src='data:image/png;base64,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' alt="" srcset=""/>
              
              <h2 className='' style={{textDecoration: "none"}}>React-Growth</h2>
              
              </div>
              </a>
            </div>
          </div>
          {/* <div  className="col-md-4"><img className='img-fluid' src={img2} alt="" srcset=""/></div>
          <div  className="col-md-4"><img className='img-fluid' src={img4} alt="" srcset=""/></div> */}
          {/* <div  className="col-md-4"><img className='img-fluid' src={img5} alt="" srcset=""/></div> */}
          {/* <div  className="col-md-4"><img className='img-fluid' src={img6} alt="" srcset=""/></div> */}
        </div>
      </div>
    </div>
  );
};

export default Service;
