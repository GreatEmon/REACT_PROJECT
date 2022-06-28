import React from 'react';
import {NavLink} from 'react-router-dom';

const card = (props) => {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div clasName="card">
                    <img src={props.imgsrc} className="card-img-top" loading="lazy" alt={props.imgsrc}/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{props.title}</h5>
                        <p className="card-text alignment">{props.desc}</p>
                        <NavLink to='/' className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default card