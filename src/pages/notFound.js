import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import Footer from './../components/footer/footer.js';


const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
        <HiOutlineExclamationCircle className="text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-4">صفحه مورد نظر یافت نشد</h1>
        <p className="text-lg mb-8">متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد. لطفاً به صفحه اصلی برگردید و دوباره تلاش کنید.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-white text-indigo-500 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
