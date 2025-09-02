import React from 'react'


function Total({ totalTimeToday }) {
    return (
        <>
            <div className="w-[50%] bg-green-100 h-[20%] rounded-2xl border-2 border-teal-800  mt-10 p-5 text-center shadow-lg absolute bottom-0 right-0">
                <div className='text-teal-800 text-lg font-semibold  '>
                    Total Focus Time
                    <div className='font-bold text-4xl p-3'>{totalTimeToday}</div>
                    <div className='font-extralight  '>Today</div>
                </div>

            </div >

        </>
    )

}
export default Total