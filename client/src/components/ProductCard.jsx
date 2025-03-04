import { Image } from '@chakra-ui/react'
import {IoHeartOutline, IoEyeOutline} from 'react-icons/io5'
import { Rating } from "@/components/ui/rating"


const ProductCard = ({imageUrl, productTitle, discountedPrice, originalPrice, ratingValue}) => {
  return (
    <div className='flex flex-col gap-3 !border-2 !w-fit !p-4 !rounded-md hover:bg-[#5e3c35]'>
        <div className='!border-2 !relative !w-fit bg-white !p-5 !rounded-tr-lg !rounded-tl-lg'>
            <Image src={imageUrl} className='w-[12vw]'/>
            <IoHeartOutline size={24} className='absolute top-3 right-3 text-black cursor-pointer'/>
            <IoEyeOutline size={24} className='absolute top-11 right-3 text-black cursor-pointer'/>
        </div>
        <h2 className='!font-bold !text-lg'>{productTitle}</h2>
        <div className='flex gap-3'>
            <h2 className='text-orange-500 !text-lg'>${discountedPrice}</h2>
            <h2 className='line-through text-gray-500 !text-lg'>${originalPrice}</h2>
        </div>
        <Rating readOnly defaultValue={ratingValue} size="md" colorPalette="yellow"/>
    </div>
  )
}

export default ProductCard