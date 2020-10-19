import React from 'react';
import img from '../Images/72057312_2532004303700525_1511605660993716224_o.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
const Home = () => {
    return (
        <div id='home'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6 mt-5 pt-5 text">
                        <h1>Hi,</h1>
                        <h1>I'am <span className='text-primary'>Kazi Rafi</span> </h1>
                        <h1 className='text-warning'>Web Developer</h1>
                        <a type="button" class="btn btn-primary mt-3" href="#contact">Contact</a><br/><br/>

                        <a className='mr-3'  href="https://www.facebook.com/profile.php?id=100006729403463" target="_blank" >
                            <FacebookIcon style={{ fontSize: 30  ,color:'black'}}/>
                        </a>
                        <a className='mr-3' href="" target="_blank" >
                            <LinkedInIcon  style={{ fontSize: 30 ,color:'black' }}/>
                        </a>
                        <a className='mr-3' href="https://github.com/kazirafi71" target="_blank" >
                            <GitHubIcon style={{ fontSize: 30  ,color:'black'}}/>
                        </a>
                    </div>
                    <div className="col-md-6 image">
                        <img className='rounded mt-4' src={img} height='400px'/>

                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;