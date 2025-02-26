import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-16' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Enjoy our premium ice creams crafted for rich flavor and a creamy texture. Available in a variety of delicious flavors to satisfy every craving.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>SHOP</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+7823239511</li>
            <li>Contact@frostbitecreamery.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ frostbitecreamery.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
