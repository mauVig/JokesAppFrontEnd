import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Autoplay } from 'swiper';

import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-flip';
import { motion } from 'framer-motion';

import st from '../styles/details.module.css';

export default function JokesCont() {
  const [text, setText] = useState('');
  const [punchline, setPunchline] = useState([]);

  const [cont, setCont] = useState(0);
  const go = useNavigate();
  const handlerSlide = () => {
    setCont((x) => x + 1);
    if (cont === punchline.length) {
      setCont(0);
      go('/score');
    }
  };

  useEffect(() => {
    fetch('http://localhost:80/jokes/one', {
      'Access-Control-Allow-Headers': 'application/json',
    })
      .then((aux) => aux.json())
      .then((data) => {
        setText(data.text);
        setPunchline(data.punchline);
      })
      .catch((err) => console.log(err, '---Error en front'));
  }, []);

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
        <Swiper
          effect={'flip'}
          modules={[EffectFlip, Autoplay]}
          className={`mySwiper ${st.heiLong}`}
          autoplay={{
            delay: 2700,
            disableOnInteraction: false,
          }}
          loop={false}
          onSlideChange={handlerSlide}
        >
          <SwiperSlide className='bg-red-400 text-4xl flex justify-center items-center p-6 drop-shadow-2xl row-span-2 text-center'>
            <div className={st.textCss}>{text}</div>
          </SwiperSlide>
          {punchline.map((pun) => (
            <SwiperSlide
              className='bg-red-400 text-4xl flex justify-center items-center p-6 drop-shadow-2xl row-span-2 text-center'
              key={pun}
            >
              <div className={st.textCss}>{pun}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
}
