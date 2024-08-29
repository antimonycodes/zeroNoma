import React from 'react';
import campaignsImg from "../../assets/campaigns.png"; // Import the image

const Gallery = () => {
  return (
    <div className="container relative h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
      <p className="mb-12 text-lg text-gray-500">Here are a few of the awesome Services we provide.</p>
      
      {/* Grid layout for top four boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div className="relative">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-500 rounded-lg"></span>
          <div className="relative p-5 bg-white border-2 border-red-500 rounded-lg">
            <img src={campaignsImg} alt="Service 1" className="w-full h-auto object-cover rounded-lg" />
          
          </div>
        </div>
        <div className="relative">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-orange-500 rounded-lg"></span>
          <div className="relative p-5 bg-white border-2 border-orange-500 rounded-lg">
            <img src={campaignsImg} alt="Service 2" className="w-full h-auto object-cover rounded-lg" />
           
          </div>
        </div>
        <div className="relative">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-teal-500 rounded-lg"></span>
          <div className="relative p-5 bg-white border-2 border-teal-500 rounded-lg">
            <img src={campaignsImg} alt="Service 3" className="w-full h-auto object-cover rounded-lg" />
           
          </div>
        </div>
        <div className="relative">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-pink-500 rounded-lg"></span>
          <div className="relative p-5 bg-white border-2 border-pink-500 rounded-lg">
            <img src={campaignsImg} alt="Service 4" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
      
      {/* Grid layout for bottom three boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="relative">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
          <div className="relative p-5 bg-white border-2 border-indigo-500 rounded-lg">
            <img src={campaignsImg} alt="DAPP Development" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
        <div className="relative">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
          <div className="relative p-5 bg-white border-2 border-purple-500 rounded-lg">
            <img src={campaignsImg} alt="Web 3.0 Development" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
        <div className="relative">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
          <div className="relative p-5 bg-white border-2 border-green-500 rounded-lg">
            <img src={campaignsImg} alt="Bot/Script Development" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
