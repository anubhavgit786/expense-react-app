import React from 'react';
import Expense from './Expense';

const AllExpenses = ({ expenses, onDeleteExpense }) => {
  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border border-gray-300">Name</th>
          <th className="p-2 border border-gray-300">Amount</th>
          <th className="p-2 border border-gray-300">Date</th>
          <th className="p-2 border border-gray-300">Delete Expense</th>
        </tr>
      </thead>
      <tbody>
        {expenses?.map((expense) => (
          <Expense key={expense.id} expense={expense} onDeleteExpense={onDeleteExpense} />
        ))}
      </tbody>
    </table>
  );
};

export default AllExpenses;
