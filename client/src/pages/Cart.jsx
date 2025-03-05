import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Checkout from "./checkout";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "LCD Monitor", price: 550, quantity: 1,image: "\product-10.jpeg" },
    { id: 2, name: "Hi Gamepad", price: 550, quantity: 2, image: "\product-10.jpeg" },
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: Number(quantity) } : item))
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
        <Navbar/>
    <div className="!p-6 !bg-white !min-h-screen">
      <h2 className="!text-xl !font-bold !mb-4">Cart</h2>
      <table className="!w-full !border-collapse !border !border-gray-300">
        <thead>
          <tr className="!bg-black">
            <th className="!border p-2">Product</th>
            <th className="!border p-2">Price</th>
            <th className="!border p-2">Quantity</th>
            <th className="!border p-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border">
              <td className="!p-2 !flex items-center">
                <img src={item.image} alt={item.name} className="!w-10 !h-10 !mr-2" />
                {item.name}
              </td>
              <td className="!p-2">${item.price}</td>
              <td className="!p-2">
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  className="!border !p-1"
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </td>
              <td className="!p-2">${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="!flex !justify-between !mt-6">
        <button className="!border !px-4 !py-2 !hover:bg-gray-200 cursor-pointer">Return To Shop</button>
        <button className="border px-4 py-2">Update Cart</button>
      </div>
      <div className="!flex !justify-between !items-center !mt-6">
        <input type="text" placeholder="Coupon Code" className="!bg-gray-800 border px-4 py-2 " />
        <button className="!bg-red-500 !text-white !px-4 !py-2">Apply Coupon</button>
      </div>
      <div className="!border !p-4 !mt-6 w-1/3 !ml-auto">
        <h3 className="!font-bold !mb-2">Cart Total</h3>
        <p>Subtotal: ${calculateSubtotal()}</p>
        <p>Shipping: Free</p>
        <p className="!font-bold">Total: ${calculateSubtotal()}</p>
        <Link to = {"./Checkout"} >
        <button className="!bg-red-500 !text-white !px-4 !py-2 !w-full !mt-4">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Cart;
