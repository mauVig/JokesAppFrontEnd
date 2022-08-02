/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-flip';
import { motion } from 'framer-motion';

import st from '../../styles/details.module.css';

export default function JokesCont({ text, punch }) {
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
        onEnded={{ opacity: 1, scale: .6}}
        className={`${st.heiLong}`}
      >
        <Swiper
          effect={'flip'}
          modules={[EffectFlip, Autoplay]}
          className={`mySwiper ${st.heiLong}`}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className='bg-red-400 text-4xl flex justify-center items-center p-6 drop-shadow-2xl row-span-2 text-center'>
            <div className={st.textCss}>{text}</div>
          </SwiperSlide>
          {punch.map((pun) => (
            <SwiperSlide className='bg-red-400 text-4xl flex justify-center items-center p-6 drop-shadow-2xl row-span-2 text-center'>
              <div className={st.textCss}>{pun}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
}
