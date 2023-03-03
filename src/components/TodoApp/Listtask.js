import React from 'react'

const Listtask = ({task,index,removeTask}) => {
  return (
    <>
      <div className='listtask'>
    {task.title}
        <button onClick={()=>{removeTask(index)}} className='deletebtn'>Delete</button>
      </div>
    </>
  )
}

export default Listtask