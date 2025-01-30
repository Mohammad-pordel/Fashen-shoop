import React from 'react';
import Footer from './../components/footer/footer.js';

const AboutUs = () => {
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">درباره ما</h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              به فروشگاه آنلاین فشن شاپ خوش آمدید! ما با سال‌ها تجربه در زمینه طراحی و فروش لباس‌های مد روز، به دنبال ارائه بهترین تجربه خرید آنلاین برای مشتریان خود هستیم.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">ماموریت ما</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              در فشن شاپ، ما به کیفیت، سبک و رضایت مشتری اهمیت می‌دهیم. هر کدام از محصولات ما به دقت انتخاب شده‌اند تا شما بهترین‌ها را داشته باشید. از لباس‌های روزمره تا مدل‌های خاص و منحصر به فرد، همه در دسترس شماست.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">تیم ما</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              تیم ما متشکل از طراحان خلاق و متخصصان با انگیزه است که به روزترین ترندهای دنیای مد را دنبال می‌کنند.
            </p>
            <img src='./../images/MODIR-FOROSH-SATHE-1-SHAKHES-1.jpg' alt="تیم ما" className="w-full h-auto rounded-lg shadow-md mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">تماس با ما</h2>
            <p className="text-gray-600 leading-relaxed">
              ما همیشه به دنبال بهبود و ارتقاء تجربه خرید شما هستیم و از پیشنهادات و نظرات شما استقبال می‌کنیم. می‌توانید از طریق راه‌های زیر با ما تماس بگیرید:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4">
              <li>ایمیل: support@fashionshop.com</li>
              <li>تلفن: 123-456-7890</li>
              <li>نشانی: خیابان مد، پلاک ۱۰، تهران</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
