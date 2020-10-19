import React from 'react';

const Card = ({icon,title}) => {
    return (
        <div className='card_hover'>
            <div class=" card xyz py-4 text-center" >
            <div className='text-center py-2'><i style={{fontSize:'30px'}}  class={icon} aria-hidden="true"></i></div>
            
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-outline-warning">Contact Me</a>
  </div>
</div>
        </div>
    );
};



export default Card;