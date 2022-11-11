import React from "react";

function Transaction({item}) {
  return (
    <div className="flex mt-2 justify-between border-2 p-2" key={item.id}>
      <p className="">{item?.desc}</p>
      <p className="">${item?.amount}</p>
    </div>
  );
}

export default Transaction;
