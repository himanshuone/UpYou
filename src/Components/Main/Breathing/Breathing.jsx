import React, { useState, useEffect } from 'react'
import { motion, useCycle } from 'framer-motion'
import Loading from './Loading'

function Breathing() {
    const [isInhale, setIsInhale] = useCycle(true, false)
    const [started, setStarted] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!started) return
        const interval = setInterval(() => {
            setIsInhale()
            setCount(prev => prev + 1)
        }, 2000)
        return () => clearInterval(interval)

    }, [setIsInhale, started])
    const scale = isInhale ? 1.2 : 0.2

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">

                    {!started && (
                        <button
                            className="font-stretch-125%  text-gray-700 "
                            onClick={() => setStarted(true)}
                        >
                            Inhale
                        </button>
                    )}
                    {started && <motion.div
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
                    </motion.div>}

  {started && <Loading />}
                </div>



        </>
    )
}

export default Breathing