import React from 'react';

const Expense = ({ expense }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="px-4 py-2 text-gray-700 text-center">{expense?.name}</td>
      <td className="px-4 py-2 text-gray-700 text-center">${expense?.amount}</td>
      <td className="px-4 py-2 text-gray-700 text-center">{expense?.date?.toLocaleDateString()}</td>
    </tr>
  );
};

export default Expense;

