import React, { useState } from 'react'
import { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'
import { v4 as uuidv4 } from 'uuid';

function AddTransaction() {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    amount: 0,
    desc: "",
  })
  const {setBalance, balance} = useContext(TransactionContext)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev, 
      [e.target.name] : e.target.value,  
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setBalance([...balance, formData])
    document.getElementById("form").reset();
  }

  return (
    <div className="border-2 mt-4 p-4 w-[350px] ">
    <form
      className="flex flex-col gap-2 items-center"
      onSubmit={handleSubmit}
      id = "form">
      <input className="border-2 w-[300px] px-2 py-1" type="text" placeholder="Enter Amount..." name = "amount" onChange={handleChange}/>
      <input className="border-2 w-[300px] px-2 py-1" type="text" placeholder="Description..." name = "desc" onChange={handleChange}/>
      <button className="bg-gray-800 text-white rounded-md px-4 py-1 w-[150px]">
        Add Transation
      </button>
    </form>
  </div>
  )
}

export default AddTransaction