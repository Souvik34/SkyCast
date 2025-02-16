/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

function Navbar() {


    const handleClick = () => {
        window.location.reload();
    };


    return (
        <div className="navbar">
            <div className="flex-1 flex items-center justify-center">
                <button onClick={handleClick} className='ml-2 text-7xl flex mt-5'>
                    <img src={logo} alt="Logo" className='mr-4' style={{height: '3rem',width: '4.5rem', marginTop: '0.5rem'}} /> 
                    SkyCast
                </button>
            </div>
        </div>
    
    );
}


    export default Navbar