import React,{useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
},[])
    return (
        <div id='contact'> 
            <div className="container">
                <h1 data-aos="fade-right"  className='text-center'>CONTACT</h1> <hr size="5" className='w-25 mx-auto'/>
                <div className="row mt-5">
                    <div data-aos="zoom-in"  className="col-md-6 mx-auto">
                    <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col">
      <label for="validationTooltip01">Name</label>
      <input type="text" class="form-control" id="validationTooltip01" required placeholder='Enter your name'/>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div><br/>
    <div class="col">
      <label for="validationTooltip02">Email</label>
      <input type="email" class="form-control" id="validationTooltip02" placeholder='Enter your email' required/>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
  </div><br/>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea placeholder='Enter Your Message' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button class="mt-4 btn-lg btn btn-outline-primary" type="submit">Send</button>
  </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;