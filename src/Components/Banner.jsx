import React from 'react';
import { color, motion } from "motion/react"
import { easeInOut } from 'motion';
import team1 from '../assets/Team/team1.jpg'
import team2 from '../assets/Team/team2.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 w-10/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 mx-auto'>
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-56 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 rounded-lg shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="w-56 h-56 bg-cover rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 rounded-lg shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: [0, 50, 0], color: ['red'] }}
                        transition={{ duration: 5, delay: 1, ease: easeInOut, repeat: Infinity }}
                        className="text-5xl font-bold">Leatest <motion.span
                            animate={{ color: ['#deb32c', '#2cde37', '#2cdec8'] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >job</motion.span>
                        for you</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;