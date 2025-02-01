import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import supabase from '../../supabase-client';

export default function FourPictureHome() {
  const [covers, setcover] = useState([])

  useEffect(() => {
    getFourecovereHome()
  }, [])

  const getFourecovereHome = async () => {
    const { data, error } = await supabase.from("fourecovereHome").select("*");
    if (error) {
      console.log("Error fetching", error);
    } else {
      setcover(data)
      console.log(data);
    }
  }


  return (
    <div className='mt-10 mb-10 overflow-hidden '>
      <div className='grid  grid-cols-1 md:grid-cols-2 gap-4'>
        {covers.map(item => (
          <div key={item.id} className='w-full flex align-middle mr-1'>
            <Link to={`/products/${item.category}`}>
              <img className='w-[98%] max-w-[100%] rounded-md  cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out  shadow-md' src={item.img} alt="" />
            </Link>
          </div>
        ))}
      </div>

    </div>
  )
}
