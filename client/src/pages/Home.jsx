import Navbar from "@/components/Navbar";
import React from "react";
import { GoChevronRight } from "react-icons/go";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { Button, Separator } from "@chakra-ui/react";
import ProductCard from "@/components/ProductCard";

const bannerItems = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
  "Sports Hub",
  "Furnitures",
];

const categoryCardItems = [
  {
    name: "Phones",
    src: "/mobile.svg",
    alt: "mobile",
    className:
      "!border-2 !border-white !py-8 !px-18 flex flex-col gap-8 rounded-lg hover:bg-[#DB4444] transition-all !text-lg",
  },
  {
    name: "Computers",
    src: "/computer.svg",
    alt: "computer",
    className:
      "!border-2 !border-white !py-8 !px-16 flex flex-col gap-3 rounded-lg hover:bg-[#DB4444] transition-all",
  },
  {
    name: "Smart watch",
    src: "/smartwatch.svg",
    alt: "smartwatch",
    className:
      "!border-2 !border-white !py-8 !px-14 flex flex-col gap-3 rounded-lg hover:bg-[#DB4444] transition-all",
  },
  {
    name: "Camera",
    src: "/camera.svg",
    alt: "camera",
    className:
      "!border-2 !border-white !py-8 !px-18 flex flex-col gap-8 rounded-lg hover:bg-[#DB4444] transition-all",
  },
  {
    name: "Headphones",
    src: "/headphone.svg",
    alt: "headphone",
    className:
      "!border-2 !border-white !py-8 !px-14 flex flex-col gap-3 rounded-lg hover:bg-[#DB4444] transition-all",
  },
  {
    name: "Gaming",
    src: "/gaming.svg",
    alt: "gaming",
    className:
      "!border-2 !border-white !py-8 !px-18 flex flex-col gap-8 rounded-lg hover:bg-[#DB4444] transition-all",
  },
];

const productCard = [
  {
    imageUrl: "/product-card.png",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-card.png",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-card.png",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-card.png",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-card.png",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-card.png",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-card.png",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-card.png",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
];

const ourProducts = [
  {
    imageUrl: "/product-card.png",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-1.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-4.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-5.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-2.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-3.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-6.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-7.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-10.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-11.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },

  {
    imageUrl: "/product-8.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-9.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-12.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-4.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-5.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
  {
    imageUrl: "/product-2.jpeg",
    productTitle: "FANTECH Gaming Console",
    discountedPrice: 260,
    originalPrice: 360,
    ratingValue: 3,
  },
];

const Home = () => {
  return (
    <div className="">
      <Navbar />

      {/* HERO SECTION */}
      <div className="flex items-center !px-20">
        {/* RIGHT BANNER */}
        <div className="w-[20%]">
          <ul className="flex flex-col gap-4">
            {bannerItems.map((item, index) => (
              <li
                className="!text-lg flex items-center justify-between"
                key={index}
              >
                {item}
                {["Woman's Fashion", "Men's Fashion"].includes(item) && (
                  <GoChevronRight className="!mr-12 font-bold" />
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* LEFT BANNER */}
        <div className="w-[80%] !border-l-1">
          <img src="/banner.png" alt="banner" className="!pt-12 !pl-12" />
        </div>
      </div>

      {/* BROWSE BY CATEGORY */}
      <div className="!px-20 !mt-[8rem] flex flex-col gap-20">
        <div className="flex items-center gap-5">
          <img src="/rectangle.svg" alt="rectangle" />
          <h1 className="text-[#DB4444] !text-xl !font-semibold tracking-wide">
            Categories
          </h1>
        </div>
        <div className="flex justify-between">
          <h1 className="!text-5xl !font-semibold tracking-widest">
            Browse By Category
          </h1>
          <div className="flex gap-4 cursor-pointer">
            <BsArrowLeftSquareFill className="!text-2xl" />
            <BsArrowRightSquareFill className="!text-2xl" />
          </div>
        </div>
        <div className="flex gap-24">
          {categoryCardItems.map((item, index) => {
            return (
              <div key={index} className={item.className}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={item.name === "Camera" ? "" : "invert"}
                />
                <h2 className="text-white truncate">{item.name}</h2>
              </div>
            );
          })}
        </div>
      </div>

      {/* BEST SELLING PRODUCTS */}
      <div className="!px-20 !mt-[8rem] flex flex-col gap-20 border-t-1">
        <Separator className="!my-6" />
        <div className="flex items-center gap-5">
          <img src="/rectangle.svg" alt="rectangle" />
          <h1 className="text-[#DB4444] !text-xl !font-semibold tracking-wide">
            This month
          </h1>
        </div>
        <div className="flex justify-between">
          <h1 className="!text-5xl !font-semibold tracking-widest">
            Best Selling Products
          </h1>
          <Button className="!bg-[#DB4444] !text-white tracking-wide !font-medium">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {productCard.map((item, index) => {
            return (
              <ProductCard
                imageUrl={item.imageUrl}
                productTitle={item.productTitle}
                discountedPrice={item.discountedPrice}
                originalPrice={item.originalPrice}
                ratingValue={item.ratingValue}
                key={index}
              />
            );
          })}
        </div>
      </div>

      {/* Categories Banner */}
      <div className="!px-20 !py-40">
        <Separator />
        <img
          src="/categories.png"
          alt="categories"
          className="!w-[90vw] !mt-40"
        />
      </div>

      {/* BEST SELLING PRODUCTS */}
      <div className="!px-20 !mt-[8rem] flex flex-col gap-20 border-t-1 justify-center">
        <div className="flex items-center gap-5">
          <img src="/rectangle.svg" alt="rectangle" />
          <h1 className="text-[#DB4444] !text-xl !font-semibold tracking-wide">
            Our Products
          </h1>
        </div>
        <div className="flex justify-between">
          <h1 className="!text-5xl !font-semibold tracking-widest">
            Explore Our Products
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {ourProducts.map((item, index) => {
            return (
              <ProductCard
                imageUrl={item.imageUrl}
                productTitle={item.productTitle}
                discountedPrice={item.discountedPrice}
                originalPrice={item.originalPrice}
                ratingValue={item.ratingValue}
                key={index}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <Button className="!bg-[#DB4444] !text-white tracking-wide !font-medium !w-fit flex justify-center">
            View All Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
