import React, { useState, useEffect } from 'react'
import "./Counter.css";
import vector from './images/Vector.svg';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import home from "./images/home.svg";
import option from "./images/option.svg";

const Counter = () => {

    const [time, setTime] = useState(new Date());
    const [dateString, setDateString] = useState("");
    const [num, setNum] = useState(0);
    const [undo, setUndo] = useState(0);
    const [hyt, setHyt] = useState("0px");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = hours % 12 || 12;

    useEffect(() => {
        const currentDate = new Date();
        const date = currentDate.getDate();
        const monthIndex = currentDate.getMonth();

        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        const month = monthNames[monthIndex];

        setDateString(`${date} ${month}`);
    }, []);

    const minus = () => {
        if (num >= 1) {
            setNum(num - 1);
        } else {
            setNum(0);
        }
    }

    return (

        <div className='Div_main'>

            <div id='drop_main' style={{ height: hyt }} onClick={() => setHyt("0px")}>
                <div className='d_down'>
                    <NavLink className="top_link" to="/calculator">Calculator</NavLink>
                    <NavLink className="top_link" to="/discount">Discount</NavLink>
                    <NavLink className="top_link" to="/emi">EMI</NavLink>
                    <NavLink className="top_link" to="/bmi calculator">BMI</NavLink>
                    <NavLink className="top_link" to="/age calculator">Age Calculator</NavLink>
                    <NavLink className="top_link" to="/counter">Counter</NavLink>
                </div>
            </div>

            <div className='Detail_main'>
                <div id='d_main'>
                    <div>
                        <span className='hom_btn'>
                            <NavLink to="/">
                                <img src={home}></img></NavLink></span>
                        <span id='date'>{dateString} </span>| <span id='time'>{twelveHourFormat}:{minutes < 10 ? '0' : ''}{minutes}</span></div>
                    <span id='svg'><img src={vector} /> <h3>{amOrPm}</h3></span>
                    <span className='hom_btn' onClick={() => setHyt("100vh")}>
                        <img src={option}></img>
                    </span>
                </div>
            </div>

            <div className='Apps_main'>

                <Navbar />

                <div className='counter_main'>
                    <div id='counter'>
                        <button onClick={minus}>-</button>
                        <div id='display'> {num} </div>
                        <button onClick={() => { setNum(num + 1); setUndo(undo + 1) }}>+</button>
                    </div>
                    <div id='btns'>
                        <button onClick={() => setNum(undo)}>Undo</button>
                        <button onClick={() => setNum(num + 100)}>+100</button>
                    </div>
                    <button onClick={() => setNum(0)}>0</button>
                </div>


            </div>
        </div>
    )
}

export default Counter;