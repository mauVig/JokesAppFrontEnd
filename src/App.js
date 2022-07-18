import React, { useEffect, useState } from 'react';
import { MdChevronRight } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';

import JokeCard from './components/Card/JokeCard.jsx'

function App() {
  const [ text , setText ] = useState('')
  const [ punchline, setPunchline] = useState([])
  const [ bool , setBool ] = useState(false)
  useEffect(()=>{
    setBool(x=>!x)
  },[])

  useEffect(() =>{
    fetch('http://localhost:80/jokes/one',{
      'Access-Control-Allow-Headers' : 'application/json'
    })
      .then( (aux) => aux.json() )
      .then( (data) => {
        setText(data.text)
        setPunchline(data.punchline)
      })
      .catch((err)=> console.log(err,'---Error en front'))
  },[bool])

  const handlerNext = () => {
    setBool(x=>!x)
  }
  return (
    <>
      <div className='bg-red-500 w-screen h-screen p-4 '>
        <div className=' max-w-7xl mx-auto  '>
          <div className='flex justify-center items-center h-200'>
            <JokeCard text={text} />
          </div>
          <div className='flex justify-around items-center w-4/5 mx-auto '>
            <div className=''>
              <button className='flex justify-center items-center bg-rose-700 text-white pl-6 pr-4 py-4 rounded-2xl text-2xl hover:bg-rose-800 transition-all  duration-300 hover:scale-125'>
                <MdChevronRight className=' rotate-180 mt-1 mr-2' />
                <span>Volver</span>
              </button>
            </div>
            <div className=''>
              <button className='flex justify-center items-center bg-rose-700 text-white pl-6 p-6 rounded-2xl text-2xl hover:bg-rose-800 transition-all  duration-300 hover:scale-125'>
                <BsSuitHeart className='text-3xl' />
              </button>
            </div>
            <div className=''>
              <button 
                className='flex justify-center items-center bg-rose-700 text-white pl-6 pr-4 py-4 rounded-2xl text-2xl hover:bg-rose-800 transition-all  duration-300 hover:scale-125'
                onClick={handlerNext}
              >
                <span>Siguiente</span>
                <MdChevronRight className='mt-1 ml-4 ' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
