import React from 'react'

function Loading() {
    return (
        <>
            <div className="w-full justify-center items-end  flex ">
                <div className="w-1/2  flex bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                    <div className="bg-orange-700 h-1.5 rounded-full dark:bg-gray-400" style={{ width: '45%' }}></div>
                </div>
            </div>
        </>
    )
}

export default Loading