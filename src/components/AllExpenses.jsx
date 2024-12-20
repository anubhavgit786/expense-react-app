import React from 'react';
import Expense from './Expense';


const AllExpenses = ({ expenses }) => 
{
    
  return (
    <ul>
      <ul>
          { 0 < expenses.length && expenses?.map((expense)=> <Expense key={expense.id} expense={expense} />)  }
        </ul>
    </ul>
  );
}

export default AllExpenses;
