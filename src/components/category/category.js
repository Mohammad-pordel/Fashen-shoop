import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import supabase from '../../supabase-client'


export default function Category() {
    const [datas, setData] = useState([])

    useEffect( () => {
        getSuggestedCategory()
    }, [])

    const getSuggestedCategory = async() => {
        const { data, error } = await supabase.from("suggestedCategory").select("*");
        if (error) {
            console.log("Error fetching", error);
        } else {
            setData(data)
            console.log(data);
        }

    }

    return (
        <>
            <div className='-mt-1 md:-mt-32 mb-8 w-[85%] m-auto bg-white flex flex-col flex-wrap'>
                <div>
                    <h3 className='text-center text-base md:text-2xl font-DanaDemiBold'>خرید بر اساس دسته بندی</h3>
                </div>

                <div className='grid m-auto grid-cols-2 md:grid-cols-4  gap-14 md:gap-36  mt-4 md:mt-14'>
                    {datas.map((item) => (
                        <NavLink key={item.id} to={`/products/${item.category}`}>
                            <div className='w-32 md:w-40  h-auto group overflow-hidden flex flex-col p-4 mt-4 transition-all rounded-lg hover:-translate-y-2 hover:shadow-2xl' >
                                <img className='group-hover:scale-110 transform transition duration-500 ease-in-out w-full h-full rounded-xl' src={item.img} alt="" />
                                <h3 className='w-full text-center mt-5 text-sm md:text-base font-DanaMedium'>{item.title}</h3>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}
