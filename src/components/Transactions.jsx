import React from "react";
import Transaction from "./Transaction";
import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

function Transactions() {
  const { balance, setBalance } = useContext(TransactionContext);

  const handleDelete = (transaction) => {
    const newList = balance.filter((item) => item.id !== transaction.id);
    setBalance(newList);
  };
   

  const datalist = balance.map((item) => {
    return <Transaction key={item.id} item={item} handleDelete={handleDelete} />;
  });

  return (
    <div className="w-[350px] mt-4">
      <h1>Transactions</h1>
      <input
        className="border-2 w-full rounded-full py-1 px-2 bg-slate-200 mt-2 mb-2"
        type="text"
        placeholder="Search"
      />
      {datalist}
    </div>
  );
}

export default Transactions;
