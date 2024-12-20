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

  const handleDeleteExpense = (expenseID)=>
  {
    const newExpenses = expenses.filter( expense => expense.id !== expenseID);
    setAllExpenses(newExpenses);
  }

  return (
    <div>
     <Header/> 
     <AddExpense onAddExpense={handleAddExpense} />
     <FilterExpense expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
}

export default App;
