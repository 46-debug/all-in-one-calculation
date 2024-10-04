import React, { useState, useEffect } from 'react'
import vector from './images/Vector.svg';
import "./Calc.css";
import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom';
import home from "./images/home.svg";
import option from "./images/option.svg";

const Calculator = () => {

    const [result, setResult] = useState("");
    const [time, setTime] = useState(new Date());
    const [dateString, setDateString] = useState('');
    const [color, setColor] = useState('');
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
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const month = monthNames[monthIndex];

        setDateString(`${date} ${month}`);
    }, []);

    const click = (event) => {
        setResult(result.concat(event.target.value));
        if (event.target.value === "%" || event.target.value === "/" || event.target.value === "*" || event.target.value === "-" || event.target.value === "+" || event.target.value === ".") {
            setColor("red")
        } else {
            setColor("white");
        }
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error");
        }
    }

    const clear = () => {
        setResult("");
    }

    const del = () => {
        setResult(result.slice(0, -1));
    }

    return (
        <>

            <div className='Div_main'>

                <div id='drop_main' style={{height: hyt}} onClick={()=>setHyt("0px")}>
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
                        <span className='hom_btn' onClick={()=>setHyt("100vh")}>
                            <img src={option}></img>
                        </span>
                    </div>
                </div>

                <div className='Apps_main'>

                    <Navbar />

                    <div className='calc_main'>
                        <input type='text' placeholder='Hello !' value={result} style={{ color: color }} />

                        <div className='btn_main'>
                            <div className='btn_list'>
                                <button id='ac' onClick={clear}>AC</button>
                                <button className='opp_b' onClick={del}>←</button>
                                <button className='opp_b' value="%" onClick={click}>%</button>
                                <button className='opp_b' value="/" onClick={click}>/</button>
                            </div>

                            <div className='btn_list'>
                                <button className='num_b' value="7" onClick={click}>7</button>
                                <button className='num_b' value="8" onClick={click}>8</button>
                                <button className='num_b' value="9" onClick={click}>9</button>
                                <button className='opp_b' value="*" onClick={click}>X</button>
                            </div>

                            <div className='btn_list'>
                                <button className='num_b' value="4" onClick={click}>4</button>
                                <button className='num_b' value="5" onClick={click}>5</button>
                                <button className='num_b' value="6" onClick={click}>6</button>
                                <button className='opp_b' value="-" onClick={click}>-</button>
                            </div>

                            <div className='btn_list'>
                                <button className='num_b' value="1" onClick={click}>1</button>
                                <button className='num_b' value="2" onClick={click}>2</button>
                                <button className='num_b' value="3" onClick={click}>3</button>
                                <button className='opp_b' value="+" onClick={click}>+</button>
                            </div>

                            <div className='btn_list'>
                                <button className='num_b' value="0" onClick={click}>0</button>
                                <button className='num_b' value="00" onClick={click}>00</button>
                                <button className='num_b' value="." onClick={click}>.</button>
                                <button className='opp_b' onClick={calculate}>=</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Calculator;