import React from "react";
import {BsTrashFill} from 'react-icons/bs'

function Transaction({item, handleDelete}) {

  return (
    <div className="flex mt-2 justify-between border-2 p-2">
      <p className="">{item?.desc}</p>
      <div className="flex gap-2 items-center">
        <p className="">${item?.amount}</p>
        <BsTrashFill onClick={() => handleDelete(item)} />
      </div>
      
    </div>
  );
}

export default Transaction;
