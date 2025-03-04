import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Contact = () => {
  return (
    <div>
       <Navbar/> 
    <div className="!bg-black !text-white !p-10">
      <div className="!max-w-6xl !mx-auto !flex !flex-col md:!flex-row !gap-10">
        {/* Contact Info Section */}
        <div className="!bg-gray-900 !p-6 !rounded-lg !w-full md:!w-1/3 !border !border-gray-700">
          <div className="!mb-6">
            <h3 className="!text-lg !font-bold !mb-2">Call To Us</h3>
            <p className="!text-gray-300">We are available 24/7, 7 days a week.</p>
            <p className="!text-red-500 !font-bold">Phone: +8801611112222</p>
          </div>
          <div>
            <h3 className="!text-lg !font-bold !mb-2">Write To Us</h3>
            <p className="!text-gray-300">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="!text-gray-400">Emails: customer@exclusive.com</p>
            <p className="!text-gray-400">support@exclusive.com</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="!bg-gray-900 !p-6 !rounded-lg !w-full md:!w-2/3 !border !border-gray-700">
          <form className="!space-y-4">
            <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="!w-full !p-3 !rounded-lg !bg-gray-800 !text-white !border !border-gray-700 !outline-none"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="!w-full !p-3 !rounded-lg !bg-gray-800 !text-white !border !border-gray-700 !outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="!w-full !p-3 !rounded-lg !bg-gray-800 !text-white !border !border-gray-700 !outline-none"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="!w-full !p-3 !h-40 !rounded-lg !bg-gray-800 !text-white !border !border-gray-700 !outline-none"
            ></textarea>
            <button className="!bg-red-600 !text-white !py-3 !px-6 !rounded-lg !font-bold !hover:bg-red-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
