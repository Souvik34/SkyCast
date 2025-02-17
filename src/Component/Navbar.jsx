/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {


    const handleClick = () => {
        window.location.reload();
    };


    return (

        <div className="navabr flex-1 flex items-center justify-center">
            <button onClick={handleClick} className='ml-0 text-3xl md:text-7xl flex items-center mt-5'>
                <img src={logo} alt="Logo" className='mr-6' style={{ height: '3rem', width: '4.5rem', marginTop: '0.5rem' }} />
                SkyCast
            </button>
        </div>

    );
}


export default Navbar