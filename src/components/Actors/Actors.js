import React from 'react';
import './Actors.css';

const Actors = (props) => {
    // destructuring 
    const { name, img, role, age, country, salary } = props.actor;
    return (

        <div className='col-md-4'>
            <div className="card mb-3 mt-2 p-2 cart-style" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top image-size rounded-circle text-center" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-title">Role: {role}</p>
                    <p className="card-title">Age: {age}</p>
                    <p className="card-title">Country: {country}</p>
                    <p className="card-title">Cost: ${salary}</p>
                    <div className='text-center mt-3'>
                    <button onClick={() => props.handleActorsButton(props.actor)}
                        className="btn btn-primary mx-auto">Add To Cart</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Actors;