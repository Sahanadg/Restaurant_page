/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Apple from "../../assets/Apple.png";
// eslint-disable-next-line no-unused-vars
import kiwi from "../../assets/Kiwi.png";
// eslint-disable-next-line no-unused-vars
import lemon from "../../assets/Lemon.png";
// eslint-disable-next-line no-unused-vars
import tomato from "../../assets/Tomato.png";
// eslint-disable-next-line no-unused-vars
import leaf from "../../assets/Leaf.png";
// eslint-disable-next-line no-unused-vars
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
  return (
    <>
      <div className='container py-14 relative'>
        <div class= "relative z-20">
          <h1 
          data-aos ="fade-up" data-aos-delay="300"
          className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
            Taste the Healthy Difference
          </h1>

          {/* text content section */}
          <div classname="space-y-10">
          <div  data-aos ="fade-up" data-aos-delay="00"
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
            <div>
              <p>
                We know that <span className='text-primary'> time</span> is the greatest value in the modern world.
                Our healthy meal plan delivery service Good Food in Miami is the answer for those
                who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.
              </p>
            </div>
            <div className='mt-10 sm:mt-20'>
              <p>
                We know that <span className='text-primary'> time</span>  is the greatest value in the modern world.
                Our healthy meal plan delivery service Good Food in Miami is the answer for those
                who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.
              </p>
            </div>
          </div>
        </div>
        </div>
        
        {/* button section */}
        <div className='flex justify-center mt-10 sm:mt-14'>
          <PrimaryButton/>
        </div>


        {/* bg fruits pngs */}
        <div data-aos="fade-right"
        className='absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
           <img data-aos="fade-right"
           src={leaf} alt="" className='max-w-[150px]' />
        </div>

        <div data-aos="fade-right"
         className='absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
           <img src={tomato} alt="" className='max-w-[200px]' />
        </div>
         
         
        <div data-aos="fade-left"
        className='absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100'>
           <img src={lemon} alt="" className='max-w-[100px]' />
        </div>

        
        <div 
        data-aos="fade-left"className='hidden sm:block absolute bottom-0 right-0'>
          <img src={Apple} alt="" className='max-w-[150px]'/>
        </div>

        <div data-aos="fade"
        className='absolute top-1/2 -translate -y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100'>
          <img src={kiwi} alt="" className='max-w-[150px]'/>
        </div>

        
      </div>
    </>
  )
}

export default Banner;

