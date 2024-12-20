import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddExpense = ({ onAddExpense }) => 
{
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date)=>
  {
    setDate(date);
  }

  const handleSubmit = (e)=>
  {
    e.preventDefault();
    if(!name || !amount || !date)
    {
      return;
    }

    if(amount <= 0)
    {
      return;
    }

    const expense = { id: Date.now(), name, amount, date  };
    onAddExpense(expense);
    setName("");
    setAmount(0);
    setDate(new Date());

  }

  return (
    <div>
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Expense name : </label>
            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/><br/><br/>
            <label htmlFor='amount'>Expense amount : </label>
            <input type="text" name="amount" value={amount} onChange={(e)=> setAmount(+e.target.value)}/><br/><br/>
            <label htmlFor='eDate'>Expense Date : </label>
            <DatePicker id="date-ppicker" selected={date} onChange={handleDateChange} dateFormat="dd-MM-yyyy" /><br/><br/>
            <input type="submit" value="Add Expense"/>
        </form>      
    </div>
  );
}

export default AddExpense;
