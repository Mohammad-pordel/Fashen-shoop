import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import Category from '../components/category/category';
import Homeslider from './../components/sliderhome/homeSlider';
import Saleslider from '../components/salealider/saleSlider';
import ProductsHome from '../components/productsHome/productsHome';
import FourPictureHome from '../components/fourPictureHome/fourPictureHome';
import Footer from './../components/footer/footer.js';
import Loader from '../components/loder/loder';

const Home = () => {
  const [loading, setLoading] = useState(true);

  const startLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    startLoader();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Homeslider />
          <svg
            className="relative -top-0 md:-top-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="rgb(228 228 231)"
              fillOpacity="1"
              d="M0,320L80,282.7C160,245,320,171,480,165.3C640,160,800,224,960,229.3C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
          <LazyLoad>
            <Category />
          </LazyLoad>
          <LazyLoad>
            <Saleslider />
          </LazyLoad>
          <LazyLoad>
            <ProductsHome />
          </LazyLoad>
          <LazyLoad>
            <FourPictureHome />
          </LazyLoad>
          <LazyLoad>
            <Footer />
          </LazyLoad>
        </>
      )}
    </>
  );
};

export default Home;
