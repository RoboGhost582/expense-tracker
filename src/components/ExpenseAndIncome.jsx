import React from "react";
import { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

function ExpenseAndIncome() {
  const {expense, income} = useContext(TransactionContext)
  return (
    <div className="flex w-[350px] justify-between gap-2">
      <div className="border-2 mt-4 p-4 w-1/2">
        <p>Expense</p>
        <p className="text-red-500 font-bold">${expense}</p>
      </div>
      <div className="border-2 mt-4 p-4 w-1/2">
        <h1>Income</h1>
        <p className="text-green-500 font-bold">${income}</p>
      </div>
    </div>
  );
}

export default ExpenseAndIncome;
