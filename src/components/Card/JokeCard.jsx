import React,{ useEffect } from 'react';
// import { motion } from "framer-motion"

const JokeCard = ({ text }) => {



  return (
    <>
      <div className='bg-red-800 text-3xl flex justify-center items-center p-6 rounded-2xl drop-shadow-2xl h-full row-span-2 '>
        <p className='block'>{text}</p>
      </div>
    </>
  );
};

export default JokeCard;
