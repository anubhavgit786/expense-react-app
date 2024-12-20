import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddExpense = ({ onAddExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !date || amount <= 0) {
      return;
    }

    const expense = { id: Date.now(), name, amount, date };
    onAddExpense(expense);
    setName("");
    setAmount("");
    setDate(new Date());
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-700 text-center">Add Expense</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Expense Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Expense Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter expense name"
          />
        </div>

        {/* Expense Amount */}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Expense Amount:
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value === "" ? "" : +e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
          />
        </div>

        {/* Expense Date */}
        <div>
          <label htmlFor="date-picker" className="block text-sm font-medium text-gray-700">
            Expense Date:
          </label>
          <DatePicker
            id="date-picker"
            selected={date}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
