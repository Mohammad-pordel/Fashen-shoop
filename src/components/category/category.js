import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
export default function Category() {
    const [datas, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/suggestedCategory')
            .then((res) => res.json())
            .then((data) => {
                setData(Object.entries(data))
                console.log(data);
                
            })

           
            
    }, [])

    return (
        <>
            <div className='-mt-1 md:-mt-32 mb-8 w-[85%] m-auto bg-white flex flex-col flex-wrap'>
                <div>
                    <h3 className='text-center text-base md:text-2xl font-DanaDemiBold'>خرید بر اساس دسته بندی</h3>
                </div>

                <div className='grid m-auto grid-cols-2 md:grid-cols-4  gap-14 md:gap-36  mt-4 md:mt-14'>
                    {datas.map((item) => (
                        <NavLink key={item[1].id} to={`/products/${item[1].category}`}>
                            <div className='w-32 md:w-40  h-auto group overflow-hidden flex flex-col p-4 mt-4 transition-all rounded-lg hover:-translate-y-2 hover:shadow-2xl' >
                                <img className='group-hover:scale-110 transform transition duration-500 ease-in-out w-full h-full rounded-xl' src={item[1].img} alt="" />
                                <h3 className='w-full text-center mt-5 text-sm md:text-base font-DanaMedium'>{item[1].title}</h3>
                            </div>
                        </NavLink>
                    ))}


                </div>



            </div>
        </>
    )
}
