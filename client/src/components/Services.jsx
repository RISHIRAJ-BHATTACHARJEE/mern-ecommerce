import React from "react";
import { FaTruck, FaHeadset, FaCheckCircle } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <div className="flex justify-center items-center space-x-32 py-16 bg-white">
      {/* Service Item */}
      <div className="flex flex-col items-center text-center mr-4">
        <div className="!flex !justify-center !items-center !w-24 h-24 !bg-gray-200 !rounded-full !shadow-lg">
          <div className="!flex !justify-center !items-center !w-20 h-20 !bg-black !rounded-full">
            <FaTruck className="text-white text-3xl" />
          </div>
        </div>
        <h3 className="font-bold mt-6 !mr-3.5 text-xl">FREE AND FAST DELIVERY</h3>
        <p className="text-md text-gray-600 ">Free delivery for all orders over $140</p>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <div className="flex justify-center items-center w-24 h-24 bg-gray-200 rounded-full shadow-lg">
          <div className="flex justify-center items-center w-20 h-20 bg-black rounded-full">
            <FaHeadset className="text-white text-3xl" />
          </div>
        </div>
        <h3 className="font-bold mt-6 text-xl">24/7 CUSTOMER SERVICE</h3>
        <p className="text-md text-gray-600">Friendly 24/7 customer support</p>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <div className="flex justify-center items-center w-24 h-24 bg-gray-200 rounded-full shadow-lg">
          <div className="flex justify-center items-center w-20 h-20 bg-black rounded-full">
            <FaCheckCircle className="text-white text-3xl" />
          </div>
        </div>
        <h3 className="font-bold mt-6 text-xl">MONEY BACK GUARANTEE</h3>
        <p className="text-md text-gray-600">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default ServiceSection;

