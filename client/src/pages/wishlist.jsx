import { useState } from "react";
import { FaOtter, FaTrash } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([
      { id: 1, name: "Gucci duffle bag", price: 960, oldPrice: 1160, discount: 35, image: "\product-10.jpeg" },
      { id: 2, name: "RGB liquid CPU Cooler", price: 1960, oldPrice: null, image: "\product-10.jpeg"  },
      { id: 3, name: "GP11 Shooter USB Gamepad", price: 550, oldPrice: null, image: "\product-10.jpeg"  },
      { id: 4, name: "Quilted Satin Jacket", price: 750, oldPrice: null, image: "\product-10.jpeg"  },
    ]);
  
    const removeFromWishlist = (id) => {
      setWishlist(wishlist.filter((item) => item.id !== id));
    };
  
    return (
    <div>
        <Navbar/>
      <div className="p-6 bg-black text-white min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Wishlist ({wishlist.length})</h2>
          <Button className="!bg-gray-700 !text-white !text-l px-1 py-1">Move All To Bag</Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="border border-gray-700 p-4 rounded-lg shadow-lg bg-gray-900">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2" />
              <Button className="w-full bg-white text-black">Add To Cart</Button>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-medium">{item.name}</p>
                <FaTrash 
                  className="text-gray-400 cursor-pointer hover:text-red-500" 
                  onClick={() => removeFromWishlist(item.id)}
                />
              </div>
              <p className="text-red-400 font-bold">${item.price}</p>
              {item.oldPrice && (
                <p className="text-gray-500 line-through text-sm">${item.oldPrice}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer/>
      </div>
    );
  };
  
  export default Wishlist;
  

