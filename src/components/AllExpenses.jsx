import React from 'react';
import Expense from './Expense';

const AllExpenses = ({ expenses }) => 
{
  
  return (
    <ul className="space-y-4">
      {expenses?.length > 0 &&
        expenses.map((expense) => <Expense key={expense.id} expense={expense} />)}
    </ul>
  );
};

export default AllExpenses;

