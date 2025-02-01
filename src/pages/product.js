import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SliderProduct from '../components/sliderProduct/sliderProduct';
import StarRating from '../components/stars/stars';
import { IoIosArrowBack } from "react-icons/io";
import { HiInformationCircle } from "react-icons/hi";
import { SiTicktick } from "react-icons/si";
import showToast from '../components/toastify/toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/customNotif/customNotif.css';
import Loader from '../components/loder/loder';
import Footer from './../components/footer/footer.js';
import supabase from '../supabase-client.js';
import { Bolt } from '@mui/icons-material';


export default function Product() {
  const [allproducts, setAllProducts] = useState([]);
  const [allproductCard, setAllProductsCard] = useState([]);
  const [mainProduct, setMainProduct] = useState([]);
  const [productCardId, setProductCardId] = useState(null);
  const [repeat, setRepeat] = useState(false);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [loading, setLoading] = useState(true);
  let Params = useParams();


  useEffect(() => {
    getProducts()
    getProductCard()
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
    let selectProduct = allproducts.filter((product) => {
      return product.id == Params.postID;
    })
    console.log(selectProduct);
    setMainProduct(selectProduct);
  }, [allproducts]);


  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  });


  const getProductCard = async () => {
    const { data, error } = await supabase.from("card").select("*");
    if (error) {
      console.log("Error fetching", error);
    } else {
      setAllProductsCard(data)
      console.log(data);
    }
  }

  useEffect(() => {
    if (allproductCard.length > 0 && mainProduct.length > 0) {
      allproductCard.forEach(item => {

        if (item.code === mainProduct[0].id) {
          setRepeat(true);
          setProductCardId(item.id);
        }
      });
    }
  }, [allproductCard, mainProduct]);

  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    setColor(checked ? value : '');
  };

  const handelSizaChange = (event) => {
    setSize(event.target.value)
  }

  const addCard = async () => {
    if (color === '' && size === '') {
      showToast('لطفا رنگ و سایز کالا را انتخاب کنید', 'toast-custom-error')
      return;
    }

    if (repeat) {
      let updatedProductCard = [...allproductCard]

      updatedProductCard.some((item) => {
        if (item.code === mainProduct[0].id) {
          item.count += 1
          return true
        }
      })

      let finalUupdatedProductCard = updatedProductCard.find(item => item.code === mainProduct[0].id)
      let updateCounte = finalUupdatedProductCard.count
      const { data, error } = await supabase
        .from('card')
        .update({ count: updateCounte })
        .eq('id', productCardId);
      if (error) {
        console.error('Error updating product count:', error);
      } else {
        console.log('Product count updated:', data);
        showToast("به تعداد این محصول در سبد خرید افزوده شد", 'toast-custom-success')
      }

    } else {
      let product = {
        title: mainProduct[0].title,
        price: mainProduct[0].price,
        discount: mainProduct[0].discount,
        img: mainProduct[0].img,
        code: mainProduct[0].id,
        color: color,
        size: size,
        count: 1
      }

      const { data, error } = await supabase
        .from("card")
        .insert([product])
        .single();

      if (error) {
        console.log("Error adding todo", error);
      } else {
        console.log(data);
        showToast("محصول مورد نظر به سبد خرید افزوده شد", 'toast-custom-success')
      }
    }
  }

  return (
    <>
      <ToastContainer />
      {mainProduct.length ? (
        <div className="flex flex-col md:flex-row justify-between align-middle mt-4 px-5">
          <div className="w-full md:w-[35%] mt-4  h-auto md:h-[37vw] flex flex-col bg-[#e4e4e7] align-middle justify-center rounded-lg  px-2 py-5 md:p-10">
            <SliderProduct allimage={mainProduct[0].allImg} />
          </div>

          <div className=" w-full md:w-[40%] mt-4  h-auto md:h-[37vw] flex flex-col  align-middle bg-[#e4e4e7] px-8 py-3 rounded-lg">
            <div className=' flex flex-col h-full justify-evenly align-middle'>
              <h2 className="mb-4  md:mb-2 text-lg md:text-2xl py-1 font-bold text-gray-800  ">
                نام محصول : {mainProduct[0].title}
              </h2>
              <div className='w-full h-[2px] bg-gray-300 mb-2 xl:-mb-5 mt-1 md:mt-2'></div>
              <div className='flex my-1 md:my-6 2xl:my-1 justify-start align-baseline '>
                <StarRating rating={mainProduct[0].score} />
                <span className=' mr-2 text-base'>( {mainProduct[0].score} )</span>
                <div className='bg-white pb-0 py-1 px-3 rounded-lg mr-2  flex justify-center '>
                  <span className=' text-sm '>22دیدگاه</span>
                  <IoIosArrowBack />
                </div>
              </div>
              <div className='mb-4 md:mb-2 2xl:mb-4 w-full h-[2px] bg-gray-300 mt-2 xl:-mt-5'></div>

              <div className='mb-4 md:mb-2 2xl:mb-4  flex justify-between align-middle mt-4'>
                <div className="flex w-[100%] align-baseline justify-start mb-4">
                  <h1 className="ml-2 md:ml-5 text-base md:text-lg mt-2">
                    رنگ:
                  </h1>
                  {mainProduct[0].color.map((item, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor: item }}
                      className={`w-7 h-7 md:w-9 md:h-9 rounded-full ml-3 md:ml-5 relative`}
                    >
                      <input
                        type="checkbox"
                        className={`w-3 h-3 md:w-4 md:h-4 cursor-pointer text-blue-600 absolute -bottom-1 -right-1`}
                        value={item}
                        checked={color === item}
                        onChange={handleColorChange}
                      />
                    </div>
                  ))}
                </div>

                <div className='flex align-middle'>
                  <label htmlFor="size " className='text-base md:text-lg '>سایز:</label>
                  <select name="size" className='w-20 h-8 px-2 mr-2 md:mr-4 rounded-md text-base md:text-lg cursor-pointer' onChange={handelSizaChange} >
                    {mainProduct[0].size.map((size, index) => (
                      <option key={index} value={size}>{size}</option>
                    ))}
                  </select>

                </div>

              </div>

              <div className="mb-4 md:mb-2 2xl:mb-4 ">
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">ویژگی‌ها</h3>
                <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10 mt-3 px-1'>
                  {mainProduct[0].feature.map((item, index) => (
                    <div key={index} className='bg-white text-base md:text-lg w-30 md:w-24 2xl:w-25 h-15 p-2 rounded-xl flex  flex-col  justify-between'>
                      <span className='text-sm text-gray-600 '>{item.title}</span>

                      <span className='text-base md:text-lg text-gray-900 text-center'> {item.text} </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className=' flex flex-col md:flex-row justify-between'>
                <div className=" mb-4 w-[100%] md:w-[50%] ">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">فروشنده</h3>
                  <div className='flex align-middle mt-2'>
                    <SiTicktick size={20} />
                    <p className="text-gray-600 mr-2 text:lg">کالای دیجیتال</p>
                  </div>
                  <div className='flex align-middle mt-2'>
                    <SiTicktick size={20} />
                    <p className="text-gray-600 mr-2 text:lg">گارانتی ۱۲ ماهه کالای دیجیتال</p>
                  </div>
                  <div className='flex align-middle mt-2'>
                    <SiTicktick size={20} />
                    <p className="text-gray-600 mr-2 text:lg">موجود در انبار فشن شاپ</p>
                  </div>
                  <div className='flex align-middle mt-2'>
                    <SiTicktick size={20} />
                    <p className="text-gray-600 mr-2 text:lg">امکان ارسال فوری (شهر تهران)</p>
                  </div>
                  <div className='flex align-middle mt-2'>
                    <SiTicktick size={20} />
                    <p className="text-gray-600 mr-2 text:lg">امکان بازگشت کالا</p>
                  </div>
                </div>
                <div className="mb-4 w-[100%] md:w-[50%] h-full flex flex-col justify-end  py-2 md:py-6 pr-0 md:pr-8">
                  <div className='flex flex-row-reverse  justify-between mb-5 '>
                    <div className='flex flex-col'>
                      <span className='font-DanaDemiBold text-base md:text-lg font-extrabold '>{mainProduct[0].price}تومان</span>
                      {mainProduct.discount > 0 && (
                        <span className='ml-5 font-DanaDemiBold text-sm  line-through opacity-50'>{mainProduct[0].price + (mainProduct[0].price * (mainProduct[0].discount / 100))}</span>
                      )}
                    </div>
                    <div className='w-12 h-full'>
                      {mainProduct[0].discount > 0 && (
                        <span className=' font-DanaDemiBold justify-center align-bottom   text-xs md:text-sm py-1 px-3 md:pt-1 bg-[#da2f4e]  rounded-md md:rounded-xl '>{mainProduct[0].discount}%</span>
                      )}
                    </div>
                  </div>
                  <button className="w-full bg-[#da2f4e]  text-white py-2 rounded hover:bg-blue-600 transition duration-200" onClick={addCard}>
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[23%] mt-4 bg-[#555557] text-white  h-auto md:h-[37vw] bg- rounded-lg p-4">
            <h1 className='text-lg md:text-xl mb-6'>قوانین فروشگاه فشن شاپ</h1>
            <div className='flex flex-col align-middle justify-center mt-4'>
              <div className='flex align-middle'>
                <HiInformationCircle size={25} />
                <h1 className='text-lg md:text-xl mr-2'>سیستم بازگشت کالا:</h1>
              </div>
              <span className=' text-base mr-2'>امکان بازگشت کالا در صورت عدم تطابق با توضیحات</span>
            </div>
            <div className='flex flex-col align-middle justify-center mt-4'>
              <div className='flex align-middle'>
                <HiInformationCircle size={25} />
                <h1 className='text-lg md:text-xl mr-2'>اطلاعات محصول:</h1>
              </div>
              <span className='text-base mr-2'>تمامی مشخصات و ویژگی‌های محصول قبل از خرید بررسی شود</span>
            </div>
            <div className='flex flex-col align-middle justify-center mt-4'>
              <div className='flex align-middle'>
                <HiInformationCircle size={25} />
                <h1 className='text-lg md:text-xl mr-2'>تحویل و ارسال:</h1>
              </div>
              <span className='text-base mr-2'>زمان‌بندی دقیق تحویل و شرایط ارسال محصولات</span>
            </div>
            <div className='flex flex-col align-middle justify-center mt-4'>
              <div className='flex align-middle'>
                <HiInformationCircle size={25} />
                <h1 className='text-lg md:text-xl mr-2'>روش‌های پرداخت:</h1>
              </div>
              <span className='text-base mr-2'>انتخاب روش پرداخت امن و راحت</span>
            </div>
            <div className='flex flex-col align-middle justify-center mt-4'>
              <div className='flex align-middle'>
                <HiInformationCircle size={25} />
                <h1 className='text-lg md:text-xl mr-2'>سوالات و پشتیبانی::</h1>
              </div>
              <span className='text-base mr-2'>دسترسی به خدمات پشتیبانی در صورت بروز مشکل یا سوال </span>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex align-middle justify-center'>
          <Loader />
        </div>
      )}
      <Footer />
    </>
  );
}
