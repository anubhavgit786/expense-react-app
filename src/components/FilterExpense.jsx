import React, { useState } from 'react';
import AllExpenses from './AllExpenses';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const FilterExpense = ({ expenses, onDeleteExpense }) => {
  const [filterName, setFilterName] = useState("");
  const [filterAmount, setFilterAmount] = useState("");
  const [filterDate, setFilterDate] = useState(null);

  const filteredExpenses = expenses?.filter((expense) => {
    const matchesName = expense.name.toLowerCase().includes(filterName.toLowerCase());
    const matchesAmount = "" === filterAmount || expense.amount === parseInt(filterAmount);
    const matchesDate = !filterDate || expense.date.toDateString() === filterDate.toDateString();
    return matchesName && matchesAmount && matchesDate;
  });

  console.log(filteredExpenses);

  return (
    <div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Filter Expenses</h2>
      <div className="space-y-4">
        {/* Filter by Name */}
        <div>
          <input
            type="text"
            placeholder="Filter By Name"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Filter by Amount */}
        <div>
          <input
            type="text"
            placeholder="Filter By Amount"
            value={filterAmount}
            onChange={(e) => setFilterAmount(e.target.value === "" ? "" : +e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Filter by Date */}
        <div>
          <DatePicker
            selected={filterDate}
            onChange={(date) => setFilterDate(date)}
            placeholderText="Filter By Date"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
    <div className='bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-6'>
       <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">My All Expenses</h2>
        {filteredExpenses?.length > 0 ? (
          <AllExpenses expenses={filteredExpenses} onDeleteExpense={onDeleteExpense} />
        ) : (
          <p className="text-gray-500 text-center">No Such Expenses</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default FilterExpense;
