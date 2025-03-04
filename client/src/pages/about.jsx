import React from "react";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/Services";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div>
     <Navbar/>   
    <div className="!bg-black !text-white !p-10">
      <div className="!max-w-6xl !mx-auto">
        <div className="!flex !flex-col md:!flex-row !items-center !gap-10">
          <div className="md:!w-1/2">
            <h2 className="!text-4xl !font-bold !mb-4">Our Story</h2>
            <p className="!text-gray-300">
              Launched in 2015, Exclusive is South Asia’s premier online shopping
              marketplace connecting thousands of sellers with millions of
              customers. We provide immediate and easy access to various
              services and products, ensuring a seamless experience.
            </p>
          </div>
          <div className="md:!w-1/2">
            <img
              src="/aboutimg.jpg"
              alt="Shopping"
              className="!rounded-lg"
            />
          </div>
        </div>

        <div className="!grid !grid-cols-2 md:!grid-cols-4 !gap-6 !mt-10">
          <div className="!p-6 !bg-gray-800 !rounded-lg !text-center !border !border-gray-600">
            <h3 className="!text-xl !font-bold">10.5k</h3>
            <p className="!text-gray-400">Sellers active on our site</p>
          </div>
          <div className="!p-6 !bg-red-600 !rounded-lg !text-center !text-white">
            <h3 className="!text-xl !font-bold">33k</h3>
            <p>Monthly Product Sales</p>
          </div>
          <div className="!p-6 !bg-gray-800 !rounded-lg !text-center !border !border-gray-600">
            <h3 className="!text-xl !font-bold">45.5k</h3>
            <p className="!text-gray-400">Customers active on our site</p>
          </div>
          <div className="!p-6 !bg-gray-800 !rounded-lg !text-center !border !border-gray-600">
            <h3 className="!text-xl !font-bold">25k</h3>
            <p className="!text-gray-400">Annual gross sales on our site</p>
          </div>
        </div>

        <div className="!flex !justify-center !mt-10 !gap-10">
          <div className="!text-center">
            <img
              src="/founder.png"
              alt="Founder"
              className="!rounded-lg !w-40 !h-48 !object-top !mx-auto !object-cover !border !border-gray-600"
            />
            <h3 className="!text-lg !font-bold !mt-2">Tom Cruise</h3>
            <p className="!text-gray-400">Founder & Chairman</p>
          </div>
          <div className="!text-center">
            <img
              src="/MDimg.png"
              alt="Director"
              className="!rounded-lg !w-40 !h-48 !object-top !mx-auto !object-cover !border !border-gray-600"
            />
            <h3 className="!text-lg !font-bold !mt-2">Emma Watson</h3>
            <p className="!text-gray-400">Managing Director</p>
          </div>
          <div className="!text-center">
            <img
              src="/producerimg.png"
              alt="Designer"
              className="!rounded-lg !w-40 !h-48 !mx-auto !object-top !object-cover !border !border-gray-600"
            />
            <h3 className="!text-lg !font-bold !mt-2">Will Smith</h3>
            <p className="!text-gray-400">Product Designer</p>
          </div>
        </div>
      </div>
    </div>
    
    <Footer/>
    </div>
  );
};

export default About;

