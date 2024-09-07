import React, { useState } from 'react';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

function DateToday() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div className='text-slate-700 dark:text-slate-300'>
      <p>{currentDate}</p>
    </div>
  );
}

export default DateToday;