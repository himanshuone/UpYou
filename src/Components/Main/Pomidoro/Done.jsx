import React from 'react'

function Done() {
   let count=5
   let done=["task1","task2","task3","task4","task5"]
  return (
<>
<div className='w-[50%]'>
    <div className='text-center text-black font-extralight pt-8'>Task Completed:{count}</div>
    <div className='text-center text-black  pt-8'>Tasks:</div>
    <div className='text-center pt-4'>
      {done.map((task, index) => (
        <li key={index} className='list-none text-black font-extralight '>{task} 
        <hr className='m-2'/></li>
        
      ))}
    </div>
</div>






</>  )
}

export default Done