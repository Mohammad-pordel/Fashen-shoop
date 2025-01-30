import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function FourPictureHome() {
  const [covers, srtCovers] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/fourecovereHome')
      .then(res => res.json())
      .then(data => {
        srtCovers(Object.entries(data));
      });
  }, [])
  return (
    <div className='mt-10 mb-10 overflow-hidden '>
      <div className='grid  grid-cols-1 md:grid-cols-2 gap-4'>
        {covers.map(item => (
          <div key={item[1].id} className='w-full flex align-middle mr-1'>
            <Link to={`/products/${item[1].category}`}>
            <img className='w-[98%] max-w-[100%] rounded-md  cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out  shadow-md' src={item[1].img} alt="" />
            </Link>
          </div>
        ))}
      </div>

    </div>
  )
}
