import React, { useState, useEffect } from 'react';
import calc from './images/calc.svg';
import age from './images/age.svg';
import convert from './images/convert.svg';
import count from './images/count.svg';
import dis from './images/dis.svg';
import int from './images/int.svg';
import note from './images/note.svg';
import bmi from './images/bmi.svg';
import vector from './images/Vector.svg';
import './Home.css';
import { NavLink } from 'react-router-dom';


const Home = () => {
  const [time, setTime] = useState(new Date());
  const [dateString, setDateString] = useState('');

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

  return (
    <>
      <div className='div_main'>
        <div className='detail_main'>
          <div id='d_main'>
            <div>
              <span id='date'>{dateString} </span>|
              <span id='time'>
                {twelveHourFormat}:{minutes < 10 ? '0' : ''}
                {minutes}
              </span>
            </div>
            <span id='img'>
              <img src={vector} /> <h3>{amOrPm}</h3>
            </span>
          </div>
        </div>
        <div className='apps_main'>

          <div className='apps'>
            <NavLink className="links" to="/calculator">
              <img src={calc} /> Calculator </NavLink>
          </div>

          <div className='apps'>
            <NavLink className="links" to="discount">
              <img src={dis} />
              Discount </NavLink>
          </div>

          <div className='apps'>
            <NavLink className="links" to="emi">
              <img src={int} />
              EMI </NavLink>
          </div>

          <div className='apps'>
            <NavLink className="links" to="bmi calculator">
              <img src={bmi} />
              BMI </NavLink>
          </div>

          <div className='apps'>
            <NavLink className="links" to="age calculator">
              <img src={age} />
              Age Calculator </NavLink>
          </div>

          <div className='apps'>
            <NavLink className="links" to="counter">
              <img src={count} />
              Counter </NavLink>
          </div>

          <div className='apps'>Coming Soon</div>
        </div>
      </div>


    </>
  );
};

export default Home;
