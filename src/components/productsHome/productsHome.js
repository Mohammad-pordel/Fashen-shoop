import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import 'tailwindcss/tailwind.css';
import Stars from './../stars/stars'
import './App.css';
import supabase from '../../supabase-client';

export default function ProductsHome() {
    const [allproduct, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        const { data, error } = await supabase.from("products").select("*");
        if (error) {
            console.log("Error fetching", error);
        } else {
            setAllProducts(data.slice(0, 12))
            console.log(data);
        }
    }

    const offset = currentPage * itemsPerPage;
    const currentItems = allproduct.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(allproduct.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        console.log(selected);

        setCurrentPage(selected);
    };

    return (
        <div className=' w-[100%] h-[64rem]  md:h-[58rem] flex justify-around align-middle'>
            <div className='w-[95%] mt-10 flex flex-col align-middle bg-[#e5e7eb] rounded-3xl'>
                <div className='flex justify-between align-middle px-3 md:px-10 mt-10 mb-5'>
                    <h1 className='font-DanaDemiBold text-base md:text-lg'>جدیدترین های فشن شاپ</h1>
                    <Link to={`/products/all`}>
                        <div className='group flex align-middle -mt-2 p-2 hover:text-[#da2f4e] bg-[#e5e7eb] rounded-md text-center'>
                            <h1 className='group-hover:ml-3 mt-1 ml-1 transition-all'>مشاهده همه</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3  gap-8 mt-5'>
                    {currentItems.map(item => (
                        <div key={item.id} className='product-card shadow-lg transition-all  hover:scale-105 bg-white md:bg-[#c9cbce] p-4 flex justify-center align-middle rounded-xl hover:bg-[#fff] hover:shadow-2xl'>
                            <Link to={`/product/${item.id}`}>
                                <div className='h-52 w-32 md:h-72 md:w-52 p-5 flex flex-col justify-between transition-all  bg-[#fff]  rounded-xl'>
                                    <div className='flex justify-center items-center'>
                                        <img src={item.img} className='max-w-full rounded-lg shadow-md ' alt={item.title} />
                                    </div>
                                    <div className='h-full w-full flex flex-col justify-around align-middle'>
                                        <span className='text-sm md:text-base text-center overflow-hidden font-semibold text-gray-700 mt-4'>{item.title}</span>
                                        <div className='flex flex-row justify-between align-middle'>
                                            <span className='hidden md:inline-block font-DanaDemiBold text-sm md:text-base text-gray-800'>قیمت:</span>
                                            <span className='font-DanaDemiBold text-sm md:text-base text-gray-800'>{item.price} تومان</span>
                                        </div>
                                        <div className='flex  justify-end'>
                                            <Stars rating={item.score} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-5'>
                    <ReactPaginate
                        previousLabel={'قبلی'}
                        nextLabel={'بعدی'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination flex justify-center pb-1'}
                        activeClassName={'active text-white bg-gray-800'}
                        previousClassName={'prev-btn mx-2 p-2 border rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 transition-colors'}
                        nextClassName={'next-btn mx-2 p-2 border rounded-lg  bg-gray-300 hover:bg-gray-400 text-gray-800 transition-colors'}
                        disabledClassName={'disabled-btn opacity-50 cursor-not-allowed'}
                        pageClassName={'page-btn mx-1 p-2 border rounded-lg  bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors'}
                        activeLinkClassName={'active-link'}
                    />
                </div>
            </div>
        </div>
    );
}
