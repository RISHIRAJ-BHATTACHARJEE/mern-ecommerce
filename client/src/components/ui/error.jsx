import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ErrorPage = () => {
  return (
    <div>
        <Navbar/>
    <div className="!bg-black !text-white !h-screen !flex !flex-col !items-center !justify-center">
      <h1 className="!text-6xl !font-bold">404 Not Found</h1>
      <p className="!text-gray-400 !mt-4">Your visited page not found. You may go home page.</p>
      <Link to="/" className="!mt-6 !bg-red-600 !text-white !px-6 !py-3 !rounded !text-lg !font-semibold !hover:bg-red-700">
        Back to home page
      </Link>
    </div>
    <Footer/>
    </div>
  );
};

export default ErrorPage;
