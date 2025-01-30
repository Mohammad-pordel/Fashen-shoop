import React from 'react'
import { Link } from 'react-router-dom';


export default function ProductsBox({ id, img, title, price, score, category, discount, color, stock }) {

  return (
    <>
      <Link to={`/product/${id}`}>
        <div className='w-44 md:w-72 h-full py-5 bg-white  group shadow-xl cursor-pointer rounded-lg '>
          <div className='flex align-top justify-center'>
            <img src={`./../${img}`} alt="product" className='w-44 h-32 md:w-72 md:h-52 rounded-lg shadow-md group group-hover:scale-110 transform transition duration-500 ease-in-out ' />
          </div>
          <div className='p-2  pt-5'>
            <span className='text-sm md:text-base text-center overflow-hidden font-semibold text-gray-700 '>{title}</span>
            <div className='flex flex-col align-middle justify-around mt-3'>
              <div className='flex align-middle justify-end '>
                <span className='text-xs md:text-sm text-center ml-1 font-semibold text-gray-700 '>{score}</span>
                <img src="./../images/star-yellow.webp" alt="" />
              </div>
              <div className='flex flex-row-reverse  justify-between mt-4'>

                <div className='flex flex-col'>
                  <span className='font-DanaDemiBold text-sm md:text-base  '>{price}تومان</span>
                  {discount > 0 && (
                    <span className='ml-5 font-DanaDemiBold text-sm  line-through opacity-50'>{price + (price * (discount / 100))}</span>
                  )}
                </div>
                <div className='w-12 h-full'>
                  {discount > 0 && (
                    <span className=' font-DanaDemiBold justify-center align-bottom   text-xs md:text-sm py-1 px-3 md:pt-1 bg-[#da2f4e]  rounded-md md:rounded-xl '>{discount}%</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
