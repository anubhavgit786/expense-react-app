import React, { useState } from 'react';
import AllExpenses from './AllExpenses';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const FilterExpense = ({ expenses }) => 
{

  const [filterName, setFilterName] = useState("");
  const [filterAmount, setFilterAmount] = useState("");
  const [filterDate, setFilterDate] = useState(null);

  const filteredExpenses = expenses?.filter((expense)=>
  {
    const matchesName = expense.name.toLowerCase().includes(filterName.toLowerCase());
    const matchesAmount = "" === filterAmount ||  expense.amount === parseInt(filterAmount);
    const matchesDate = !filterDate || expense.date.toDateString() === filterDate.toDateString();
    return matchesName && matchesAmount && matchesDate;
  });



  return (
    <div>
      <br />
      <br />
      <br />
      <h2>Filter Expenses</h2>
      <div>
        <input type='text' placeholder='Filter By Name' value={filterName} onChange={(e)=> setFilterName(e.target.value)} />
      </div>
      <br />
      <div>
        <input type='text' placeholder='Filter By Amount' value={filterAmount} onChange={(e)=> setFilterAmount(+e.target.value)} />
      </div><br />
      <div>
        <DatePicker selected={filterDate} onChange={(date)=> setFilterDate(date)} placeholderText='Filter By Date' />
      </div>
      <br />
      <br />
      <br />
      <div>
        <h2>My All Expenses</h2>
        { 0 < filteredExpenses.length ? (<AllExpenses expenses={filteredExpenses}/>) : (<p>No Such Expenses</p>) }
      </div>
    </div>
  );
}

export default FilterExpense;
