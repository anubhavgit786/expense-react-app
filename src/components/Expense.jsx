import React from 'react';

const Expense = ({ expense }) => 
{
  return (
    <li>
        <p>Name : {expense?.name}</p>
        <p>Amount : {expense?.amount}</p>
        <p>Date: {expense?.date?.toLocaleDateString()}</p>
    </li>
  );
}

export default Expense;
