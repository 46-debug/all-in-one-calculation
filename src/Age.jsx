import React, { useState, useEffect } from 'react';
import "./Age.css";
import vector from './images/Vector.svg';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import home from "./images/home.svg";
import option from "./images/option.svg";

const Age = () => {
    const [time, setTime] = useState(new Date());
    const [dateString, setDateString] = useState("");
    const [hyt, setHyt] = useState("0px");
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState(null);

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
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December',
        ];

        const month = monthNames[monthIndex];
        setDateString(`${date} ${month}`);
    }, []);

    // Function to calculate age
    const calculateAge = () => {
        if (!birthDate) return;

        const today = new Date();
        const birth = new Date(birthDate);
        let ageYears = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        const dayDiff = today.getDate() - birth.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            ageYears--;
        }

        setAge(ageYears);
    };

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
                            <NavLink to="/"><img src={home} alt="Home" /></NavLink>
                        </span>
                        <span id='date'>{dateString}</span> | <span id='time'>{twelveHourFormat}:{minutes < 10 ? '0' : ''}{minutes}</span>
                    </div>
                    <span id='svg'><img src={vector} alt="AM/PM" /> <h3>{amOrPm}</h3></span>
                    <span className='hom_btn' onClick={() => setHyt("100vh")}>
                        <img src={option} alt="Options" />
                    </span>
                </div>
            </div>

            <div className='Apps_main'>
                <Navbar />

                <div className='age_main'>

                    <label id='lab'> Select your birthdate: </label>
                    <input id='inut'
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)} />
                    {age !== null && (
                        <div className='age_result'>
                            <h3>Your Age is: {age} years</h3>
                        </div>
                    )}
                    <button onClick={calculateAge} className='calculate'>Calculate Age</button>
                </div>

            </div>
        </div>
    );
};

export default Age;
