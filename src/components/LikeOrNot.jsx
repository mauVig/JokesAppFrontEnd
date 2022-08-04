import React from 'react';
import {
    AiOutlineLike,
    AiOutlineDislike,
    AiTwotoneDislike,
    AiTwotoneLike,
  } from 'react-icons/ai';
export default function LikeOrNot() {
  return (
    <>
      <div>
        <h2 className='text-center my-14 text-3xl'>¿ Te gusto ?</h2>
        <div className='flex justify-around'>
          <button className='flex justify-center items-center bg-rose-800 text-white px-6 rounded-3xl active:scale-110 text-4xl hover:bg-rose-700 transition-all duration-300 scale-125 hover:scale-150 p-4'>
            <AiOutlineLike className='' />
          </button>
          <button className='flex justify-center items-center bg-rose-800 text-white px-6 rounded-3xl active:scale-110 text-4xl hover:bg-rose-700 transition-all duration-300 scale-125 hover:scale-150 p-4'>
            <AiOutlineDislike />
          </button>
        </div>
      </div>
    </>
  );
}
