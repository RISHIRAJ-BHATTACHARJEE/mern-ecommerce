import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const ProductDetails = () => {
  return (
    <div>
        <Navbar/>
    <div className="!bg-black !text-white !p-10">
      <div className="!max-w-6xl !mx-auto">
        <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-10">
          <div>
            <img
              src="/controller.png"
              alt="Product"
              className="!w-full !rounded-lg"
            />
            <div className="!flex !gap-4 !mt-4">
              <img
                src="/controllerA1.png"
                alt="Thumbnail 1"
                className="!w-20 !h-20 !rounded-lg"
              />
              <img
                src="/controllerA2.png"
                alt="Thumbnail 2"
                className="!w-20 !h-20 !rounded-lg"
              />
              <img
                src="/controllerA3.png"
                alt="Thumbnail 3"
                className="!w-20 !h-20 !rounded-lg"
              />
              <img
                src="/controllerA4.png"
                alt="Thumbnail 3"
                className="!w-20 !h-20 !rounded-lg"
              />
            </div>
          </div>
          <div>
            <h2 className="!text-3xl !font-bold">Havic HV G-92 Gamepad</h2>
            <p className="!text-red-500 !text-2xl !mt-2">$192.00</p>
            <p className="!text-gray-300 !mt-4">
              Playstation 5 Controller Skin High-quality vinyl with air
              channel adhesive for easy bubble-free install & mess-free
              removal. Precision cut.
            </p>
            <div className="!mt-4">
              <h3 className="!text-lg !font-bold">Colours:</h3>
              <div className="!flex !gap-2 !mt-2">
                <span className="!w-6 !h-6 !bg-white !rounded-full"></span>
                <span className="!w-6 !h-6 !bg-red-600 !rounded-full"></span>
                <span className="!w-6 !h-6 !bg-gray-700 !rounded-full"></span>
              </div>
            </div>
            <div className="!mt-4">
              <h3 className="!text-lg !font-bold">Size:</h3>
              <div className="!flex !gap-2 !mt-2">
                <button className="!px-4 !py-2 !bg-gray-700 !rounded">S</button>
                <button className="!px-4 !py-2 !bg-gray-700 !rounded">M</button>
                <button className="!px-4 !py-2 !bg-gray-700 !rounded">L</button>
              </div>
            </div>
            <div className="!mt-6 !flex !gap-4">
              <button className="!px-6 !py-3 !bg-red-600 !text-white !rounded-lg">
                Buy Now
              </button>
              <button className="!px-6 !py-3 !bg-gray-800 !text-white !rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="!mt-10">
          <h3 className="!text-2xl !font-bold">Related Items</h3>
          <div className="!grid !grid-cols-2 md:!grid-cols-4 !gap-6 !mt-4">
            <div className="!bg-gray-800 !p-4 !rounded-lg">
              <img
                src="/path-to-related1.jpg"
                alt="Related Product 1"
                className="!w-full !rounded-lg"
              />
              <h4 className="!text-lg !mt-2">HAVIT HV-G92 Gamepad</h4>
              <p className="!text-red-500">$120</p>
            </div>
            <div className="!bg-gray-800 !p-4 !rounded-lg">
              <img
                src="/path-to-related2.jpg"
                alt="Related Product 2"
                className="!w-full !rounded-lg"
              />
              <h4 className="!text-lg !mt-2">AK-900 Wired Keyboard</h4>
              <p className="!text-red-500">$50</p>
            </div>
            <div className="!bg-gray-800 !p-4 !rounded-lg">
              <img
                src="/path-to-related3.jpg"
                alt="Related Product 3"
                className="!w-full !rounded-lg"
              />
              <h4 className="!text-lg !mt-2">IPS LCD Gaming Monitor</h4>
              <p className="!text-red-500">$370</p>
            </div>
            <div className="!bg-gray-800 !p-4 !rounded-lg">
              <img
                src="/path-to-related4.jpg"
                alt="Related Product 4"
                className="!w-full !rounded-lg"
              />
              <h4 className="!text-lg !mt-2">RGB Liquid CPU Cooler</h4>
              <p className="!text-red-500">$150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ProductDetails;
