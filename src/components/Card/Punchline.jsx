import React from 'react';

export default function Puchline({ punchline }) {
  return (
    <>
      <div className='bg-rose-300 text-3xl flex justify-center items-center p-6 drop-shadow-2xl h-full row-span-2 text-center absolute inset-0'>
        <p className='block'>{punchline}</p>
      </div>
    </>
  );
}
