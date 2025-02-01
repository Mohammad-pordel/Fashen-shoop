import React, { useState } from 'react';
import Footer from './../components/footer/footer.js';


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('فرم داده‌ها:', formData);
  };

  return (
    <>
    <div className="flex  items-center justify-center px-5 min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">عضویت</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">نام</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="نام کامل"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ایمیل</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="ایمیل"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">رمز عبور</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="رمز عبور"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out"
            >
              عضویت
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SignUp;
