import React, { useState, useEffect } from 'react'
import { motion, useCycle } from 'framer-motion'

function Breathing() {
    const [isInhale, setIsInhale] = useCycle(true, false)
    useEffect(() => {
        const interval = setInterval(() => {
            setIsInhale()
        }, 2000)
        return () => clearInterval(interval)
    }, [setIsInhale])
    const scale = isInhale ? 1.2 : 0.2

    return (
        <>
            <div className='justify-center  flex items-center h-screen '>
                <motion.div
                    animate={{ scale }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut"
                    }}
                    className="w-40 h-40 rounded-full bg-gray-400 flex items-center justify-center"
                >
                    <motion.span
                        animate={{ scale }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut"
                        }}
                        className="font-stretch-125%  text-gray-700"
                    >
                        Inhale
                    </motion.span>
                </motion.div>


            </div>
        </>
    )
}

export default Breathing