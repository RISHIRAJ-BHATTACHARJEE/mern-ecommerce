import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  return (
    <div>
     <Navbar/>   
    <div className="!flex !justify-center !p-10 !bg-black !text-white">
      <div className="!w-1/2 !pr-10">
        <h2 className="!text-2xl !font-bold !mb-4">Billing Details</h2>
        {Object.keys(billingDetails).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.replace(/([A-Z])/g, " $1").trim() + "*"}
            value={billingDetails[key]}
            onChange={handleChange}
            className="!w-full !p-2 border !border-orange-500 !rounded mb-3 !bg-black !text-white"
          />
        ))}
        <label className="!flex !items-center !gap-2">
          <input type="!checkbox" className="!accent-orange-500" />
          Save this information for faster checkout next time
        </label>
      </div>

      <div className="!w-1/3 !bg-gray-900 !p-6 !rounded-lg">
        <div className="!mb-4">
          <div className="!flex !justify-between">
            <span>LCD Monitor</span>
            <span>$650</span>
          </div>
          <div className="!flex !justify-between">
            <span>Hi Gamepad</span>
            <span>$1100</span>
          </div>
        </div>
        <hr className="!border-gray-700" />
        <div className="!flex !justify-between mt-2">
          <span>Subtotal:</span>
          <span>$1750</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="!flex !justify-between !font-bold !text-lg !mt-2">
          <span>Total:</span>
          <span>$1750</span>
        </div>
        <div className="!mt-4">
          <label className="!flex !items-center !gap-2">
            <input type="!radio" name="!payment" className="!accent-orange-500" /> Bank
          </label>
          <label className="!flex !items-center !gap-2">
            <input type="!radio" name="!payment" className="!accent-orange-500" /> Cash on delivery
          </label>
        </div>
        <div className="!flex !mt-4 !gap-2">
          <input type="text" placeholder="Coupon Code" className="!flex-1 !p-2 !border !border-orange-500 !rounded !bg-black !text-white" />
          <button className="!bg-orange-500 !text-white !px-4 !py-2 !rounded">Apply Coupon</button>
        </div>
        <button className="!w-full !mt-4 !bg-orange-600 !text-white !py-3 !rounded">Place Order</button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Checkout;
