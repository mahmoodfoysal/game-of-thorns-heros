import React, { useEffect, useState } from 'react';
import Actors from '../Actors/Actors';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    // rendering data
    const [actors, setActors] = useState([]);
    const [cart, setCart] = useState([]);

    //load data from json
    useEffect(() => {
        fetch('actors.JSON')
        .then(res => res.json())
        .then(data => setActors(data))
    }, []);

    // cart button 
    const handleActorsButton = (actor) => {
        const newCart = [...cart, actor]
        setCart(newCart);
    }

    return (

            <div className='container'>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {                    
                            actors.map(actor => <Actors
                            key = {actor.key}    
                            actor={actor}
                            handleActorsButton = {handleActorsButton}
                            ></Actors>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                        <Cart
                        cart = {cart}
                        ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;