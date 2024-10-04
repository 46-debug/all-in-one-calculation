import React, { useState, useEffect } from 'react'
import vector from './images/Vector.svg';
import "./Emi.css";
import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom';
import home from "./images/home.svg";
import option from "./images/option.svg";

const Emi = () => {

    const [time, setTime] = useState(new Date());
    const [dateString, setDateString] = useState('');
    const [hyt, setHyt] = useState("0px");
    const [hit, setHit] = useState("0px");
    const [loanam, setLoanam] = useState();
    const [intrate, setIntrate] = useState();
    const [lonter, setLonter] = useState();
    const [padd, setPadd] = useState("0px");
    const [emi, setEmi] = useState();
    const [premt, setPremt] = useState();
    const [totint, setTotint] = useState();
    const [dis, setDish] = useState("hidden");

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

    const calcu = () => {
        const P = loanam;
        const r = intrate / 12 / 100;
        const n = lonter * 12;

        const emiCalc = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

        setEmi(emiCalc.toFixed(2));
        setPremt(loanam);
        setTotint((emiCalc * n - loanam).toFixed(2));
        setHit("fit-content");
        setPadd("10px");
        setDish("");
    }

    const clr = ()=>{
        setLoanam(0);
        setIntrate(0);
        setLonter(0);
        setDish("hidden");
        setHit("0px")
        setPadd("0px");
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

                    <div id='oo'>
                        <div id='emi_main'>
                            <div className='inpt_main'>
                                <label>Loan Amount</label>
                                <div className='input'>
                                    <p>₹</p>
                                    <input type='number' value={loanam} onChange={(event) => {
                                        setLoanam(event.target.value);
                                    }} />
                                </div>
                            </div>

                            <div className='inpt_main'>
                                <label>Interest Rate (%)</label>
                                <div className='input'>
                                    <input type='number' value={intrate} onChange={(event) => {
                                        setIntrate(event.target.value);
                                    }} />%
                                </div>
                            </div>

                            <div className='inpt_main'>
                                <label>Loan Terure (Years)</label>
                                <div className='input'>
                                    <input type='number' value={lonter} onChange={(event) => {
                                        setLonter(event.target.value);
                                    }} />
                                </div>
                            </div>
                        </div>

                        <div id='output_main' style={{ height: hit, overflow: 'hidden', padding: padd }}>
                            <div id='emi'>
                                <h4>EMI</h4>
                                <h2>₹{emi}</h2>
                            </div>

                            <div className='interest_main'>
                                <div className='pm'>
                                    <p><span id='red'></span>Principal Amount</p>
                                    <h5>₹{premt}</h5></div>
                                <div className='pm'>
                                    <p><span id='pink'></span>Total Interest</p>
                                    <h5>₹{totint}</h5></div>
                            </div>
                        </div>

                        <button className='calculate' onClick={calcu}> Calculate </button>
                        <button className='clear' onClick={clr} style={{visibility: dis}}> Clear </button>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Emi;