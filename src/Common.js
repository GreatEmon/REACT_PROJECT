import React from 'react';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
  return (
    <>
      <section id="header" className={props.class}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row d-flex align-items-center'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                <h1>
                    {props.name} 
                <strong className='brandName'>Naruto</strong></h1>
                <h2 className='my-3'>We are the team of talented developer making amazing website</h2>
                <div className='mt-3'>
                  <NavLink exact="true" to={props.visit} className='btn btn-outline-primary mt-2 rounded-pill btn1'>{props.btnName}</NavLink>
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src= {props.imgsrc} className='img-fluid animated' alt="Welcome" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Common