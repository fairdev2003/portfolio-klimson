'use client'

import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <div className="text-white p-10">
            <h1 className="text-xl font-bold">fairdev <motion.span initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.8, repeat: Infinity}}>_</motion.span></h1>
        </div>
    )
}

export default Navbar