import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets' 
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="Ice Cream Parlour" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At FrostBite Creamery, we bring you the finest handcrafted ice creams made with premium ingredients and a passion for flavor. Every scoop is crafted to deliver an unforgettable taste experience, blending tradition with innovation.</p>
          <p>From classic favorites to unique and adventurous flavors, we offer a delightful selection of creamy, rich, and refreshing ice creams. Whether you're craving something nostalgic or looking to try something new, we have the perfect treat for you.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to spread happiness, one scoop at a time! We are committed to using high-quality ingredients, crafting innovative flavors, and creating a welcoming space where every ice cream lover can indulge in their favorite treat.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Premium Ingredients:</b>
          <p className='text-gray-600'>We use only the finest, freshest ingredients to ensure every bite is rich, creamy, and delicious.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Wide Variety of Flavors:</b>
          <p className='text-gray-600'>From timeless classics to exciting new creations, we have something to satisfy every taste bud.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Made with Love:</b>
          <p className='text-gray-600'>Each scoop is crafted with care and passion, bringing joy to every customer, one treat at a time.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About;
