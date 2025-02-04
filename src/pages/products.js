import React, { useEffect, useState } from 'react'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProductsBox from '../components/productsBox/productsBox';
import { useParams } from 'react-router-dom';
import Footer from './../components/footer/footer.js';
import supabase from '../supabase-client.js';
import Loader from '../components/loder/loder';



export default function Product() {
  const [allproducts, setAllProducts] = useState([]);
  const [filterproducts, setFilterProducts] = useState([]);
  let Params = useParams()


  useEffect(() => {
    getProducts()
  }, []);

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log("Error fetching", error);
    } else {
      setAllProducts(data)
      console.log(data);
      
    }
  }

  useEffect(() => {
    Params.postID === 'all' ? (
      setFilterProducts(allproducts)
    ) : Params.postID === 'offs' ? (
      setFilterProducts(allproducts.filter(item => {
        return item.discount > 0
      }))

    ) : Params.postID === 'man' || Params.postID === 'woman' ? (
      setFilterProducts(allproducts.filter(item => {
        const firstRegex = /.+(?=-)/;
        const firstMatch = item.category.match(firstRegex);

        if (firstMatch == Params.postID) {
          return item.category.includes(firstMatch)
        }
      }))
    ) : (setFilterProducts(allproducts.filter(item => {
      const firstRegex = /.+(?=-)/;
      const secondRegex = /(?<=-).+/;
      const firstLinkMatch = Params.postID.match(firstRegex);
      const secondLinkMatch = Params.postID.match(secondRegex);
      const firstproductMatch = item.category.match(firstRegex);
      const secondproductMatch = item.category.match(secondRegex);
      if (firstLinkMatch[0] === firstproductMatch[0] && secondLinkMatch[0] === secondproductMatch[0]) {
        return item
      }

    })))
  }, [allproducts])

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  },);


  return (
    <>
    {
      filterproducts.length?(
        <>
        <div className='px-1 md:px-4 overflow-hidden mb-10'>
        <div className='w-[100%]  mt-8 flex align-middle justify-center'>
          <div className='w-64 md:w-[30%] h-10  md:hover:w-[45%] transition-all  duration-500 px-4 borde bg-white shadow-xl flex justify-between align-middle rounded-lg'>
            <input type="text" placeholder='دنبال چی میگردی؟' className='w-[80%] bg-white text-xs md:text-lg text-gray-900 outline-none font-DanaDemiBold ' />
            <IconButton aria-label="search" >
              <SearchIcon color='primary' />
            </IconButton>
          </div>
        </div>
        <div className='w-full h-[2px] bg-gray-300  mt-5 md:mt-8'></div>

        <div className=' w-full px-1 pl-6 md:px-15 2xl:px-20 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-14 mt-14'>
          {filterproducts.map((product) => (
            <ProductsBox {...product} />
          ))}
        </div>
      </div>
      <Footer />
        </>
      ):(
        <Loader/>
      )
    }

    </>
  )
}
