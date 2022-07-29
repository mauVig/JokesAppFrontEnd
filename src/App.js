import React, { useEffect, useState } from 'react';
// import { MdChevronRight } from 'react-icons/md';
// import { BsSuitHeart } from 'react-icons/bs';
import { GiRollingDices } from 'react-icons/gi';

import JokeCard from './components/Card/JokeCard.jsx';

import st from './styles/details.module.css'


export default function App() {
  const [text, setText] = useState('');
  const [punchline, setPunchline] = useState([]);
  const [bool, setBool] = useState(false);
  useEffect(() => {
    setBool((x) => !x);
  }, []);

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
  }, [bool]);

  const handlerNext = () => {
    setBool((x) => !x);
  };
  return (
    <>
      <div className='bg-red-300 w-screen h-screen p-4 '>
        <div className={`${st.cont} mx-auto `}>
          <div className=' mx-auto h-3/4  rounded-lg mb-2'>
            <JokeCard text={text} />
          </div>
          <div className='bg-red-500 mx-auto h-1/4 rounded-lg flex justify-center '>
            <div className='flex items-center'>
              <div className=''>
                <button
                  className='flex justify-center items-center bg-rose-800 text-white rounded-full active:scale-110 text-2xl hover:bg-rose-700 transition-all duration-300 scale-125 hover:scale-150 p-4'
                  onClick={handlerNext}
                >
                  <GiRollingDices className='text-6xl' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
