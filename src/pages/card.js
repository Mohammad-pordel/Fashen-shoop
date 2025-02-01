import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import StoreIcon from '@mui/icons-material/Store';
import StraightenIcon from '@mui/icons-material/Straighten';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from './../components/footer/footer.js';
import supabase from '../supabase-client.js';
import Loader from '../components/loder/loder';





export default function Card() {
  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalProfit, setTotalProfit] = useState(0)
  const [loadin, setLoading] = useState(false)


  useEffect(() => {
    getProductCard()
    startLoader()

  }, []);

  const startLoader = () => {

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }

  useEffect(() => {
    setTotalPrice(0)
    setTotalProfit(0)
    products.map(item => {
      setTotalPrice((prevNumber) => {
        return prevNumber + (item.price * item.count)
      })

      setTotalProfit((prexDiscount => {
        return prexDiscount + ((item.price * (item.discount / 100) * item.count))
      }))

    })

  }, [products])

  const getProductCard = async () => {

    const { data, error } = await supabase.from("card").select("*");
    if (error) {
      console.log("Error fetching", error);
    } else {
      setProducts(data)
      console.log(data);
    }

  }

  const addCount = async (productId) => {
    let usercard = [...products]
    console.log(usercard);

    usercard.some(item => {
      if (item.id === productId) {
        item.count = item.count != 10 ? item.count + 1 : item.count;
        return true
      }
      console.log(usercard);

    })
    const updatedProduct = usercard.find(item => item.id === productId);
    if (updatedProduct) {
      console.log(updatedProduct);


      const { data, error } = await supabase
        .from('card')
        .update({ count: updatedProduct.count })
        .eq('id', productId);

      if (error) {
        console.error('Error updating product price:', error);
      } else {
        console.log('pluse count:', data);
        getProductCard()
      }
    }
  }

  const minusCount = async (productId) => {
    let usercard = [...products]
    console.log(productId);

    usercard.some(item => {
      if (item.id === productId) {
        item.count = item.count != 1 ? item.count - 1 : item.count;
        return true
      }
    })
    const updatedProduct = usercard.find(item => item.id === productId);

    if (updatedProduct) {
      const { data, error } = await supabase
        .from('card')
        .update({ count: updatedProduct.count })
        .eq('id', productId);

      if (error) {
        console.error('Error updating product price:', error);
      } else {
        console.log('minus count:', data);
        getProductCard()
      }
    }
  }

  const deleteHandler = async (productId) => {

    const { data, error } = await supabase
      .from('card')
      .delete()
      .eq('id', productId);

    if (error) {
      console.error('Error deleting product:', error);
    } else {
      console.log('Product deleted:', data);
      getProductCard()

    }
  };


  return (
    <>
      {
        loadin ? (
          <Loader />
        ) : (
          <>
            {products.length ? (
              <div className='font-DanaMedium mb-10'>
                <div className='y-5 px-5 2xl:px-10 mt-4'>
                  <div className='flex align-middle '>
                    <h1 className='ml-2 text-xl md:text-2xl'>سبد خرید شما</h1>
                    <span className='text-sm md:text-base text-gray-600'>({products.length}مرسوله)</span>
                  </div>

                  <div className='flex flex-col md:flex-row justify-center align-middle'>

                    <div className='w-[100%] md:w-[60%] 2xl:w-[50%] flex flex-col align-middle'>
                      {products.map(product => (
                        <div key={product.id} className=' flex flex-row-reverse md:flex-row justify-between align-middle mt-4 md:mt-8 p-4 rounded-lg bg-slate-100'>
                          <div className='w-[45%] md:w-[30%] flex flex-col justify-center align-middle'>
                            <img className='shadow-xl rounded-lg w-42 md:w-56 2xl:w-60 ' src={`../../${product.img}`} alt="" />
                            <div className='w-42 md:w-56 2xl:w-60  bg-gray-100 rounded-lg flex flex-row-reverse md:flex-row justify-between align-middle mt-6 '>
                              <div className='w-60 px-4 flex justify-between align-middle'>
                                <div className='flex justify-center align-middle '>
                                  <IconButton aria-label="add" size="large" onClick={() => addCount(product.id)}>
                                    <AddIcon fontSize="inherit" color="primary" />
                                  </IconButton>
                                </div>
                                <h1 className='text-xl mt-4'>{product.count}</h1>
                                <div className='flex justify-center align-top -mt-3 '>
                                  <IconButton aria-label="minus" size="large" onClick={() => minusCount(product.id)}>
                                    <MinimizeIcon fontSize="inherit" color="primary" />
                                  </IconButton>
                                </div>
                              </div>
                              <div className='w-8 md:w-14 flex justify-center align-middle bg-[#e4e4e7] rounded-tr-lg rounded-br-lg md:rounded-tl-lg md:rounded-bl-lg'>
                                <IconButton aria-label="delete" size="large" onClick={() => deleteHandler(product.id)}>
                                  <DeleteIcon fontSize="inherit" color='error' />
                                </IconButton>
                              </div>
                            </div>
                          </div>
                          <div className='w-[55%] md:w-[60%] mr-0 md:mr-16 2xl:mr-0'>
                            <div>
                              <h1 className='text-lg md:text-xl font-bold'>{product.title}</h1>
                              <ul className='mt-6'>
                                <li className='flex align-middle mb-3'>
                                  <ColorLensIcon />
                                  <div style={{ backgroundColor: product.color }} className='w-10 h-5 rounded-sm mr-2'></div>                      </li>
                                <li className='flex align-middle mb-3'>
                                  <StraightenIcon />
                                  <span className='text-sm md:text-base mr-2'>{product.size}</span>
                                </li>
                                <li className='flex align-middle mb-3'>
                                  <StoreIcon />
                                  <span className='text-sm md:text-base mr-2'>فروشگاه فشن شاپ</span>
                                </li>
                                <li className='flex align-middle mb-3'>
                                  <VerifiedUserIcon />
                                  <span className='text-sm md:text-base mr-2'>گارانتی 24 ماهه</span>
                                </li>
                                <li className='flex align-middle mb-6'>
                                  <LocalShippingIcon />
                                  <span className='text-sm md:text-base mr-2'>ارسال در سراسر ایران</span>
                                </li>
                              </ul>
                              <div >
                                <div className=" h-full  ">
                                  <span className='text-sm md:text-lg'>قیمت محصول:</span>

                                  <div className='w-44 pt-2 flex flex-row-reverse  justify-between '>
                                    <div className='flex flex-col'>
                                      <span className='font-DanaDemiBold  text-lg md:text-xl font-bold'>{(product.price) * product.count}  <span className='text-sm md:text-base'>تومان</span> </span>
                                      {product.discount > 0 && (
                                        <span className='ml-5 font-DanaDemiBold text-sm  line-through opacity-50'>{(product.price + (product.price * (product.discount / 100))) * product.count}</span>
                                      )}
                                    </div>
                                    <div className='w-12 h-full'>
                                      {product.discount > 0 && (
                                        <span className=' font-DanaDemiBold justify-center align-bottom   text-xs md:text-sm py-1 px-3 md:pt-1 bg-[#da2f4e]  rounded-md md:rounded-xl '>{product.discount}%</span>
                                      )}
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='w-[100%] md:w-[25%] h-52 mt-8 p-5 rounded-lg bg-slate-100 mr-0 md:mr-10'>
                      <div className='flex h-full flex-col justify-between align-middle'>
                        <div className=' flex justify-between align-middle'>
                          <span className='text-base md:text-lg '>جمع سبد خرید</span>
                          <span className='text-lg md:text-xl font-bold'>{totalPrice} <span className='text-sm md:text-base'>تومان</span></span>
                        </div>
                        <div className='flex justify-between align-middle'>
                          <span className='text-base md:text-lg '>سود شما از خرید</span>
                          <span className='text-lg md:text-xl font-bold'>{totalProfit} <span className='text-sm md:text-base'>تومان</span> </span>
                        </div>
                        <div>
                          <button className="w-full bg-[#da2f4e]  text-white py-2 rounded hover:bg-blue-600 transition duration-200 text-lg md:text-xl font-medium" >
                            تکمیل سفارش و پرداخت
                          </button>
                        </div>


                      </div>

                    </div>

                  </div>
                </div>
              </div>
            ) : (
              <div className='px-5  '>
                <div className="flex flex-col items-center justify-center py-20 mt-10 rounded-2xl shadow-xl bg-gray-100 text-gray-800">
                  <FaShoppingCart className="text-7xl md:text-8xl mb-4 text-gray-500" />
                  <p className="text:xl md:text-2xl mb-4">سبد خرید شما خالی است</p>
                  <Link
                    to={`/products/all`}
                    className="px-6 py-3 text-lg md:text-xl  bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition duration-300 ease-in-out">
                    بازگشت به فروشگاه
                  </Link>
                </div>
              </div>
            )}
            <Footer />
          </>
        )
      }
    </>
  )
}
