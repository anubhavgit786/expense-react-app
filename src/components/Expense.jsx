import React from 'react';

const Expense = ({ expense, onDeleteExpense }) => {
  return (
    <tr className="text-center">
      <td className="p-2 border border-gray-300">{expense.name}</td>
      <td className="p-2 border border-gray-300">{expense.amount}</td>
      <td className="p-2 border border-gray-300">{expense.date.toLocaleDateString()}</td>
      <td className="p-2 border border-gray-300">
        <button
          onClick={() => onDeleteExpense(expense.id)}
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Expense;


