import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
     <div>
  <img src={assets.fresh} className='w-12 m-auto mb-5' alt="" />
  <p className='font-semibold'>Freshness Guaranteed</p>
  <p className='text-gray-400'>Always fresh, always delicious.</p>
</div>
<div>
  <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
  <p className='font-semibold'>Premium Quality</p>
  <p className='text-gray-400'>Only the finest ingredients.</p>
</div>
<div>
  <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
  <p className='font-semibold'>24/7 Support</p>
  <p className='text-gray-400'>We're here to help anytime.</p>
</div>


    </div>
  )
}

export default OurPolicy
