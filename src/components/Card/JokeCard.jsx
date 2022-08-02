import React, { useEffect } from 'react';
// import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-flip';

export default function JokeCard({ text }) {
  
  return (
    <>
      <div className='bg-red-400 text-3xl flex justify-center items-center p-6 drop-shadow-2xl h-full row-span-2 text-center absolute inset-0'>
        <p className='block'>{text}</p>
      </div>
    </>
  );
}
