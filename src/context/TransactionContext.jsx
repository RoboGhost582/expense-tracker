import React, { createContext, useState, useEffect} from "react";

export const TransactionContext = createContext(null);

export const TransactionContextProvider = ({ children }) => {
  const [balance, setBalance] = useState([]);
  const [total, setTotal] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    const summingData = async () => {
      const sum = balance.reduce((accumulator, item) => {
        return accumulator + parseInt(item.amount);
      }, 0);
      setTotal(sum)
    };
    summingData();
  },[balance]);

  console.log(total)

  useEffect(() => {
    const summingData = async () => {
      let sum = 0
      balance.forEach(item => {
        if(item.amount >= 0){
          sum +=  parseInt(item.amount);
        }
      });
      setIncome(sum)
    };
    summingData();
  },[balance]);

  useEffect(() => {
    const summingData = async () => {
      let sum = 0
      balance.forEach(item => {
        if(item.amount < 0){
          sum +=  parseInt(item.amount);
        }
      });
      setExpense(sum)
    };
    summingData();
  },[balance]);




  return (
    <TransactionContext.Provider
      value={{balance, setBalance, total, expense, income }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
