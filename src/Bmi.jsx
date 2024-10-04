import React, { useState, useEffect } from 'react'
import "./Bmi.css";
import vector from './images/Vector.svg';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import home from "./images/home.svg";
import option from "./images/option.svg";

const Bmi = () => {

    const [time, setTime] = useState(new Date());
    const [dateString, setDateString] = useState("");
    const [toggle, setToggle] = useState("0%");
    const [nam, setNam] = useState("Male");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();
    const [up, setUp] = useState("0px");
    const [kcolor, setKcolor] = useState("red");
    const [pcolor, setPcolor] = useState("#202020");
    const [ccolor, setCcolor] = useState("red");
    const [mcolor, setMcolor] = useState("#202020");
    const [wunit, setWuint] = useState("kg");
    const [hunit, setHuint] = useState("cm");
    const [range, setRange] = useState("");
    const [bg, setBg] = useState("");
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

    useEffect(() => {
        if (bmi <= 18.4) {
            setRange("Underweight");
            setBg("burlywood");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setRange("Normal");
            setBg("green");
        } else if (bmi >= 25.0 && bmi <= 39.9) {
            setRange("Overweight");
            setBg("yellow");
        } else {
            setRange("Obese");
            setBg("red");
        }
    }, [bmi]);

    const togg = () => {
        if (toggle == "0%") {
            setToggle("100%");
            setNam("Female");
        } else {
            setToggle("0%");
            setNam("Male");
        }
    }

    const calcu = () => {
        if (wunit == "pound" && hunit == "meter") {
            setBmi(((weight / 2.205) / (height * height)).toFixed(1));
        } else if (wunit == "kg" && hunit == "meter") {
            setBmi((weight / (height * height)).toFixed(1));
        } else if (wunit == "pound" && hunit == "cm") {
            setBmi(((weight / 2.205) / ((height / 100) * (height / 100))).toFixed(1));
        } else (
            setBmi((weight / ((height / 100) * (height / 100))).toFixed(1))
        )

        setUp("145px");
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
                    <span className='hom_btn' onClick={()=>setHyt("100vh")}>
                        <img src={option}></img>
                    </span>
                </div>
            </div>

            <div className='Apps_main'>

                <Navbar />

                <div id='black'></div>

                <div id='bmi_main'>
                    <h2>BMI Calculator</h2>
                    <div className='toggle' onClick={togg}>
                        <span id='male'>Male</span>
                        <span id='female'>Female</span>
                        <span id='togg' style={{ transform: `translateX(${toggle})` }}> {nam} </span>
                    </div>

                    <div id='inpt1'>
                        <p>Age:</p>
                        <input className="num" type='number' placeholder="00" onChange={(event) => {
                            setAge(event.target.value);
                        }} />
                    </div>

                    <div id='inpt2'>
                        <p>Weight:</p>
                        <input className="num" type='number' placeholder="00" onChange={(event) => {
                            setWeight(event.target.value);
                        }} />
                        <button className='clickB' onClick={() => { setKcolor("red"); setWuint("kg"); setPcolor("#202020") }} style={{ backgroundColor: kcolor }}>Kg</button>
                        <button className='clickB' onClick={() => { setPcolor("red"); setWuint("pound"); setKcolor("#202020") }} style={{ backgroundColor: pcolor }}>Pound</button>
                    </div>

                    <div id='inpt3'>
                        <p>Height:</p>
                        <input className="num" type='number' placeholder="00" onChange={(event) => {
                            setHeight(event.target.value);
                        }} />
                        <button className='clickB' onClick={() => { setCcolor("red"); setHuint("cm"); setMcolor("#202020") }} style={{ backgroundColor: ccolor }}>Cm</button>
                        <button className='clickB' onClick={() => { setMcolor("red"); setHuint("meter"); setCcolor("#202020") }} style={{ backgroundColor: mcolor }}>Meter</button>
                    </div>
                    <button className='calculate' onClick={calcu}>Calculate</button>
                    <div id='ans' style={{ height: up, backgroundColor: bg }}>
                        <button onClick={() => setUp("0px")}>X</button>
                        <h1>BMI = {bmi}</h1>
                        <h3>BMI = {bmi} kg/m² ({range})</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Bmi;