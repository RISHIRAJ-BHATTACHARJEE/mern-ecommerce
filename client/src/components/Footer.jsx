import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h3 className="text-lg font-bold">Exclusive</h3>
          <p className="mt-4">Subscribe</p>
          <p className="!text-sm !text-gray-400">Get 10% off your first order</p>
          <div className="!mt-4 !flex items-center border !border-gray-500 !rounded-lg !overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white px-4 py-2 w-full focus:outline-none"
            />
            <button className="bg-gray-800 p-3">
              <IoIosSend className="text-white" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-bold">Support</h3>
          <p className="mt-4 text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm text-gray-400">exclusive@gmail.com</p>
          <p className="text-sm text-gray-400">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-bold">Account</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold">Quick Link</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="text-lg font-bold">Download App</h3>
          <p className="mt-4 text-sm text-gray-400">Save $3 with App New User Only</p>
          <div className="flex mt-2 space-x-2">
            <img src="/QR.jpg" alt="QR Code" className="w-16 h-16" />
            <div className="flex flex-col space-y-2">
              <img src="/googlePay-image.png" alt="Google Play" className="w-24" />
              <img src="/applelogo.png" alt="App Store" className="w-24" />
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-gray-400 cursor-pointer hover:text-white" />
            <FaTwitter className="text-gray-400 cursor-pointer hover:text-white" />
            <FaInstagram className="text-gray-400 cursor-pointer hover:text-white" />
            <FaLinkedinIn className="text-gray-400 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
      <hr className="border-gray-700 my-6" />
      <p className="text-center text-gray-400 text-sm">© Copyright Rimel 2022. All rights reserved</p>
    </footer>
  );
};

export default Footer;
