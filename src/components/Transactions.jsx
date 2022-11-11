import React, { useState } from "react";
import Transaction from "./Transaction";
import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

function Transactions() {
  const { balance, setBalance } = useContext(TransactionContext);
  const [search, setSearch] = useState("");

  const handleDelete = (transaction) => {
    const newList = balance.filter((item) => item.id !== transaction.id);
    setBalance(newList);
  };

  const datalist = balance
    .filter((items) => {
      return search.toLowerCase() === ""
        ? items
        : items.desc.toLowerCase().includes(search.toLowerCase());
    })
    .map((item) => {
      return (
        <Transaction key={item.id} item={item} handleDelete={handleDelete} />
      );
    });

  return (
    <div className="w-[350px] mt-4">
      <h1>Transactions</h1>
      <input
        className="border-2 w-full rounded-full py-1 px-2 bg-slate-200 mt-2 mb-2"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value).toLowerCase()}
      />
      {datalist}
    </div>
  );
}

export default Transactions;
