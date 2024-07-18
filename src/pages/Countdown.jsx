// src/Countdown.js
import React from 'react';
import Countdown from 'react-countdown';
import './../index.css';

const CountdownTimer = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Countdown selesai!</span>;
    } else {
      return (
        <div className="countdown">
          <div className="countdown-item">
            <span>{days}</span> Days
          </div>
          <div className="countdown-item">
            <span>{hours}</span> Hours
          </div>
          <div className="countdown-item">
            <span>{minutes}</span> Minutes
          </div>
          <div className="countdown-item">
            <span>{seconds}</span> Seconds
          </div>
        </div>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
