import React from 'react';
import { Rings } from 'react-loader-spinner'; 

const CustomLoader = () => {
  return (
    <div className="loader-container" style={loaderContainerStyle}>
      <Rings
        height={140}
        width={140}
        color="#da2f4e"
        radius={6}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
};

const loaderContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

export default CustomLoader;
