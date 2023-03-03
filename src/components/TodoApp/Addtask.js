import React, { useState } from 'react'

const Addtask = ({addTask}) => {
    const [value,setValue]=useState("")
    const addItem=()=>{
       addTask(value);
       setValue(" ");
    };
  return (
   <>
    <div className='input-container'>
        <input className='input' placeholder='Add a New  Task' value={value} type="text"
        onChange={(e)=>{setValue(e.target.value)}}  />

        <button className='addbtn' onClick={addItem}>ADD</button>
    </div>
    </>
  )
}

export default Addtask