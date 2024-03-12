import React from 'react';
import '../index.css';


function Home() {
    return (
        <div className='food-items'>
            <img></img>
            <div className='details'>
                <div className='details-sub'>
                    <h5>Nome da comida</h5>
                </div>
                <p>Resumo da comida</p>
                <button>Modo preparo</button>
            </div>
        </div>


    ); 
} 

export default Home;