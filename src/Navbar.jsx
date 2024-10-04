import React from 'react'
import { NavLink } from 'react-router-dom';
import home from "./images/home.svg"

const Navbar = () => {
    return (
        <div id='opt_m'>

            <button className='opts'>
                <NavLink className={"link"} to="/">

                    <img src={home} alt="Home" />

                </NavLink>
            </button>

            <button className='opts'>
                <NavLink className={"link"} to="/calculator"> Calculator </NavLink>
            </button>
            <button className='opts'>
                <NavLink className={"link"} to="/discount"> Discount </NavLink>
            </button>
            <button className='opts'>
                <NavLink className={"link"} to="/emi"> EMI </NavLink>
            </button>
            <button className='opts'>
                <NavLink className={"link"} to="/bmi calculator"> BMI </NavLink>
            </button>
            <button className='opts'>
                <NavLink className={"link"} to="/age calculator"> Age Calculator </NavLink>
            </button>
            <button className='opts'>
                <NavLink className={"link"} to="/counter"> Counter </NavLink>
            </button>
        </div>
    )
}

export default Navbar;