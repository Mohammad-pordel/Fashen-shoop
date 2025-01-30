import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './../components/footer/footer.js';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ایمیل:', email);
    console.log('رمز عبور:', password);
  };

  return (
    <>
      <div className='flex flex-col md:flex-row align-middle justify-around py-36 bg-gradient-to-tr from-red-300 via-blue-400 to-purple-500'>
        <div className='hidden  md:flex w-[20%] justify-center align-middle'>
          <img className='w:14 h-14 md:w-20 md:h-20 rounded-full -mt-2 md:-mt-5  ' src="images/1000_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="logo" />
          <span className='text-white font-MorabbaBold text-base md:text-2xl mr-2'>فشن شاپ</span>
        </div>
        <div className="w-[100%] md:w-[80%] flex items-center justify-center  rounded-xl ">
          <div className="w-[80%]  px-8 py-8  md:px-56 md:py-16 text-left bg-white shadow-lg rounded-tr-3xl rounded-bl-3xl md:rounded-tr-full md:rounded-bl-full">
            <h3 className="text-2xl font-bold text-center">ورود به حساب کاربری</h3>

            <form onSubmit={handleSubmit}>
              <div className="mt-6">
                <div>
                  <div className='flex justify-start'>
                    <label className="block " htmlFor="email">ایمیل</label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full  px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 "
                    placeholder="ایمیل خود را وارد کنید"
                    required
                  />
                </div>
                <div className="mt-6">
                  <div className='flex justify-start'>
                    <label className="block">رمز عبور</label>
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="رمز عبور خود را وارد کنید"
                    required
                  />
                  <div className='flex  justify-start align-middle mt-2'>
                    <h1 className='text-xs md:text-base'>
                      عضو نیستی؟
                      <Link to={'/sign'} className='text-blue-700 text-xs md:text-base'>
                        ثبت نام کاربر
                      </Link>
                    </h1>
                  </div>
                  <div className='flex  justify-start align-middle mt-2'>
                    <h1>
                      <Link to={'/panelproducts'} className='text-blue-700 text-xs md:text-base'>
                        ورود به پنل ادمین
                      </Link>
                    </h1>
                  </div>

                </div>


                <div className="flex items-baseline justify-center">
                  <button
                    type="submit"
                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    ورود
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;

