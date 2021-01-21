import { useEffect, useState } from 'react';
import Day from '../day';

const days = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

function Calendar({ children: currentMonth }) {
  const [daysArray, setDaysArray] = useState([]);

  useEffect(() => {
    const totalDays = days[currentMonth];
    setDaysArray(new Array(totalDays).fill('*'));
  }, [currentMonth]);

  return (
    <section className="calendar">
      <h1>{currentMonth}</h1>
      <div className="days">
        {daysArray.map((_, index) => {
          const idx = index + 1;
          return <Day number={idx} key={idx} />;
        })}
      </div>
    </section>
  );
}

export default Calendar;
