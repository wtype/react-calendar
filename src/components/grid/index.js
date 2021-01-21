import { useState, useEffect } from 'react';
import Calendar from '../calendar';

const months = [
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

function Grid() {
  const currentMonth = new Date().getMonth();
  const [monthIndex, setMonthIndex] = useState(currentMonth);
  const [month, setMonth] = useState(months[monthIndex]);

  const handleMonthClick = event => {
    event.target.dataset.active = true;
    setMonthIndex(event.target.dataset.month);
    setMonth(event.target.innerText);
  };

  useEffect(() => {
    if (month) {
      console.log('%c Active month:', 'color: #ffff6c', month);
    }
  }, [month]);

  return (
    <>
      <nav className="months">
        {months.map((stringMonth, index) => {
          return (
            <span
              className="month"
              key={stringMonth}
              onClick={handleMonthClick}
              data-month={index}
              data-active={stringMonth === months[monthIndex] ? true : false}
            >
              {stringMonth}
            </span>
          );
        })}
      </nav>
      <Calendar>{month}</Calendar>
    </>
  );
}

export default Grid;
