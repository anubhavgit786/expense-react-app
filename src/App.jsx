import React, { useState } from 'react';
import Header from './components/Header';
import AddExpense from './components/AddExpense';
import FilterExpense from './components/FilterExpense';

const App = () => 
{
  const [expenses, setAllExpenses] = useState([]);

  const handleAddExpense = (expense)=>
  {
    setAllExpenses((prevExpenses)=> [...prevExpenses, expense]);
  }

  return (
    <div>
     <Header/> 
     <AddExpense onAddExpense={handleAddExpense} />
     <FilterExpense expenses={expenses} />
    </div>
  );
}

export default App;
