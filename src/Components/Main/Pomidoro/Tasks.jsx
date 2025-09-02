import { div, li } from 'framer-motion/client'
import React from 'react'

function Tasks() {
let tasks=["task1","task2","task3","task4","task5","task6","task7","task8","task9","task10"]
    return (
        <>
            <div className="w-[50%]  bg-white h-[75%] rounded-2xl border-0  border-teal-800 p-5  shadow-2xs absolute top-0 right-0 ">
                <div className='flex items-center '>
                    <span className='font-bold text-teal-800'> Tasks</span>
                    <div className="mt-4 bg-teal-800 rounded-full w-5 h-8 absolute top-0 right-8 text-white flex items-center justify-center ">
                        +
                    </div>

                </div>

                <div className="mt-8 h-[90%] overflow-y-auto">
                    {tasks.map((task,inx)=>(
                     <li key={inx} className='list-none border-s-0 rounded-lg px-5 py-4 m-4 bg-gray-100  flex justify-between items-center'>
                        <span> {task}</span>
                        <button clas>&times;</button>

                     </li>
                       
                    )

                    )}
                    </div>
                    


            </div >

        </>
    )

}
export default Tasks