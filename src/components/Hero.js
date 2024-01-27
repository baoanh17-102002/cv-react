import React from 'react';
import Social from './Social';


const Hero = () => {
  return <section className='pt-[100px]  bg-contain ' id='home'>
    <div className="container mx-auto x1:px-[100px]">
      <div className='lg:flex text-center lg:text-left '>
        {     }
        <div className='flex-1 lg:max-w-[555px] mt-12'>
          <h3 className='text-[18px] lg:text-xl font-semibold mb-2 lg:mb-[50px]'>Xin Chào Tôi Tên là </h3>
          <h2 className='text-[24px] lg:text-[32px] font-semibold text-accent mb-4 lg:mb-5'>Thạch Sơn Bảo Anh</h2>
          <h1 className='text-[60px] md:text-[80px] lg:text-[100px] leading-none font-semibold mb-6 '>Program <br /> 
          <span className='lg:pl-[70px] '>Mer</span>
          <span className='w-3 h-3 md:w-5 md:h-5 inline-block bg-black rounded-full ml-2 '></span>
          </h1>
          <p className='mb-[35px] text-lg lg:text-xl text-center lg:text-left'>Vì các nhà Lập trình viên thường tương tác với nhóm, người quản lý và khách hàng nên họ cần có kỹ năng giao tiếp tốt.</p>

        </div>
        {     }
        <div className='mx-auto max-w-min lg:m-0 relative z-10'>
          <Social />
        </div>
      </div>
    </div>
  </section>;
};

export default Hero;
