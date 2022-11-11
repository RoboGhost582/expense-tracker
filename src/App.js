import AddTransaction from "./components/AddTransaction";
import ExpenseAndIncome from "./components/ExpenseAndIncome";
import Transactions from "./components/Transactions";
import { useContext } from 'react'
import TransactionContext from './context/TransactionContext.jsx'
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false)
  const {total} = useContext(TransactionContext)
  return (
    <div className="flex flex-col items-center p-4 w-screen h-screen">
      <p className="text-3xl font-semibold p-4">Expense Tracker</p>

      <div className="flex w-[350px] justify-between text-lg">
        <h1 className="font-semibold">Balance: ${total} </h1>
        <button className="bg-gray-800 text-white rounded-md px-4 py" onClick={() => setToggle(!toggle)}>
          {toggle ? "Cancel" : "Add"}
        </button>
      </div>

      {toggle && <AddTransaction />}
      <ExpenseAndIncome />
      <Transactions />
    </div>
  );
}

export default App;
