import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import Routes from './routes';
import Navbar from './components/Navbar/navbar';
import ScrollToTop from './components/scrollTop/scrollTop';
import Loader from './components/loder/loder'; 


function App() {
  let router = useRoutes(Routes);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='font-DanaMedium'>
          <ScrollToTop />
          <Navbar />
          {router}
        </div>
      )}
    </>
  );
}

export default App;
