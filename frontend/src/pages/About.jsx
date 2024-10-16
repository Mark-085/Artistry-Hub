import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt impedit perferendis non omnis! Nemo sint architecto magnam non molestiae doloremque magni perspiciatis repudiandae consectetur odio, deleniti molestias quidem dicta minima!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit temporibus tempore iusto, reiciendis quia perferendis beatae, nihil fugiat commodi magnam a optio ullam animi sed suscipit perspiciatis itaque quasi!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam, est commodi dolores sed provident quod nemo fugiat quibusdam ratione dolorum esse amet? Nihil dolorum, enim cum ratione voluptatibus ad?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={' CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est quibusdam ipsam! Perspiciatis suscipit illo dolorum eligendi enim repellat excepturi consequuntur doloremque nemo, ut, sequi eos adipisci totam quam est!</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
              <b>Convenience:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi corporis et laborum expedita corrupti quaerat repellat dolore? Quae consequatur atque unde architecto quidem nulla ipsam quia officiis. Nihil, modi?</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
              <b>Exceptional Customer Service</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus repellat repudiandae esse ipsam rem. Sapiente, omnis. Dolore odio molestiae nostrum! Placeat quibusdam architecto adipisci maiores totam, vel dolorum. Doloremque, ea.</p>
          </div>
      </div>
       <NewsletterBox/>

    </div>
  )
}

export default About
