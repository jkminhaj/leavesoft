import React from 'react';
import Title from '../components/Homepage/Title';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Title title=" We're working hard to get this page ready for you. Stay tuned!" subtitle="Page Under Construction" />
  

      <img 
        src="https://i.ibb.co/s9hjBn8/pngegg.png" 
        alt="Under Construction" 
        className="mt-6"
      />
    </div>
  );
};

export default UnderConstruction;
