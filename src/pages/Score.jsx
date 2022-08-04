import React from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { GiRollingDices } from 'react-icons/gi';

import st from '../styles/details.module.css';

import LikeOrNot from '../components/LikeOrNot'

export default function Score() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className={`${st.heiLong}`}
      >
        <div>
          <LikeOrNot />
          <div>
            <div className='bg-red-400 mx-auto h-1/4 mt-10 flex justify-center py-8'>
              <div className='flex items-center flex-col'>
                <h2 className='text-center mb-14 text-2xl'>
                  Buscar otro chiste
                </h2>
                <div>
                  <Link
                    to='/'
                    className='flex justify-center items-center bg-rose-800 text-white rounded-full active:scale-110 text-2xl hover:bg-rose-700 transition-all duration-300 scale-125 hover:scale-150 p-4'
                  >
                    <GiRollingDices className='text-6xl' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='h-full bg-red-400 flex items-center p-4 mt-10'>
              <h2 className='font-semibold'>Queres contarnos un chiste ??</h2>
              <button className='flex justify-center items-center bg-rose-800 text-white rounded-3xl active:scale-110 hover:bg-rose-700 transition-all duration-300 hover:scale-110 p-4 ml-4'>
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
