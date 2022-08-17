import React from 'react';
import { postData } from '../../data/postData';

const HomeHero = () => {
    // console.log(postData);
    return (
        <>
            <div className="flex flex-wrap justify-center items-center xl:mx-0 mx-5 xl:mt-32 lg:mt-24 md:mt-16 mt-10  px-0 not-italic font-display tracking-wider">
                <div className='text-left'>
                    <h5 className=' font-bold text-[18px] xl:text-2xl mb-0 mx-0 leading-none'>Welcome to</h5>
                    <h2 className='font-bold xl:text-[3.25rem] text-[32px] mt-1 mx-0 leading-normal'>The Interior Lab – The Chemistry of Arts.</h2>
                    <h1 className='xl:text-[1.75rem] text-[18px] mt-3 mx-0 font-medium leading-6'>Leading Interior Design Firm in Singapore, Reputable for Innovative Solutions &amp; Pristine Workmanship</h1>
                    <div className='my-16'>
                        <a href='/' className='uppercase bg-[#f8ad23] px-8 py-3 text-white font-bold text-base'>
                            Get in touch with us
                        </a>
                    </div>
                </div>
            </div>


            <div className="w-full flex flex-wrap text-white my-10">
                {
                    postData.map((item, index) => {
                        return (
                            <div key={index} className={`md:w-1/2 w-full bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url("${item.thumb}")` }}>
                                <div className='lg:p-20 lg:m-10 m-5 p-10'>
                                    <h3 className=' font-medium text-[1.8rem] font-display leading-none mb-5'>{item.title}</h3>
                                    <p className='text-base font-medium font-sans'>{item.excerpt}</p>
                                    <div className='mt-16'>
                                        <a href='/' className='capitalize xl:px-8 xl:py-6 px-6 py-4 font-bold text-base border rounded-full hover:bg-white hover:text-gray-700'>
                                            {item.buttonText}
                                        </a>
                                    </div>
                                </div>
                            </div >
                        )
                    })
                }
            </div >
        </>
    );
};

export default HomeHero;