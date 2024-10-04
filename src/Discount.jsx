import React, { useState, useEffect } from 'react'
import vector from './images/Vector.svg';
import "./Discount.css";
import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom';
import home from "./images/home.svg";
import option from "./images/option.svg";

const Discount = () => {


    const [time, setTime] = useState(new Date());
    const [dateString, setDateString] = useState('');
    const [save, setSave] = useState(0);
    const [hyt, setHyt] = useState("0px");
    const [dis, setDis] = useState(10);
    const [price, setPrice] = useState();
    const [fprice, setFprice] = useState();
    const [display, setDisplay] = useState("flex");
    const [up, setUp] = useState("0px");

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
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const month = monthNames[monthIndex];

        setDateString(`${date} ${month}`);
    }, []);

    useEffect(() => {
        setSave(price - fprice);
    }, [fprice]);

    const go = () => {
        setFprice((dis / 100 * price).toFixed(2));
        setUp("230px");
        setDisplay("none");
    }

    const clear = () => {
        setPrice("");
        setDis("10")
        setUp("0px");
        setDisplay("flex");
    }

    return (
        <>

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

                    <div className='disc_main'>

                        <div id='up'>
                            <div className='ori_price'>
                                <p>Original Price</p>
                                <input type='number' value={price} placeholder='0.00' onChange={(event) => {
                                    setPrice(event.target.value);
                                }} />
                            </div>

                            <div className='dis_range'>
                                <p>Discount</p>
                                <h1>{dis}<span>%</span></h1>
                                <input id='range' type='range' min="0" max="100" value={dis} onChange={(event) => {
                                    setDis(event.target.value)
                                }} />
                            </div>

                            <button onClick={go} style={{display: display}}>Calculate</button>
                        </div>

                        <div id='down' style={{ height: up }}>
                            <div className='fin_price'>
                                <p>Final Price</p>
                                <h1>{save}</h1>
                            </div>

                            <div className='u_save'>
                                <p>You Save</p>
                                <h2>{fprice}</h2>
                            </div>

                            <button id='clr' onClick={clear}>CLEAR ALL</button>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Discount;