import React, { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import JokesCont from './pages/JokesCont';
import Score from './pages/Score';
import st from './styles/details.module.css';

export default function App() {


  return (
    <>
      <div className='bg-red-300 w-screen h-screen p-4 '>
        <div className={`${st.cont} mx-auto`}>
          <div className={`mx-auto mb-2 relative ${st.box}`}>
            <Routes>
              <Route
                path='/'
                element={<JokesCont/>}
              />
              <Route path='/score' element={<Score />} />
            </Routes>
          </div>
          {/* <div className='bg-red-500 mx-auto h-1/4 rounded-lg flex justify-center '>
            <div className='flex items-center'>
              <div>
                <button
                  className='flex justify-center items-center bg-rose-800 text-white rounded-full active:scale-110 text-2xl hover:bg-rose-700 transition-all duration-300 scale-125 hover:scale-150 p-4'
                  onClick={handlerNext}
                >
                  <GiRollingDices className='text-6xl' />
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
