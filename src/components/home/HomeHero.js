import React from 'react';

const HomeHero = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center xl:mx-0 mx-5 mt-32  px-0 not-italic font-display tracking-wider">
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
            <div className="w-screen flex flex-wrap text-white my-10">
                <div className="w-1/2 bg-[url('https://www.theinteriorlab.com.sg/wp-content/uploads/2020/02/the-interior-la-interior-design-singapore.jpg')] bg-cover bg-no-repeat bg-center">
                    <div className='p-20 m-10'>
                        <h3 className=' font-medium text-[1.8rem] font-display leading-none mb-5'>We offer Interior design solutions for our clients</h3>
                        <p className='text-base font-medium font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates delectus facilis fuga accusantium, sit rerum placeat ipsam pariatur quo debitis itaque unde saepe optio, deleniti neque qui vero consequatur cupiditate.</p>
                        <div className='mt-16'>
                            <a href='/' className='uppercase px-8 py-6 font-bold text-base border rounded-full'>
                                Learn more
                            </a>
                        </div>
                    </div>
                </div >
                <div className="w-1/2 bg-[url('https://www.theinteriorlab.com.sg/wp-content/uploads/2020/02/the-interior-la-interior-design-singapore.jpg')] bg-cover bg-no-repeat bg-center">
                    <div className='p-20 m-10'>
                        <h3 className=' font-medium text-[1.8rem] font-display leading-none mb-5'>We offer Interior design solutions for our clients</h3>
                        <p className='text-base font-medium font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates delectus facilis fuga accusantium, sit rerum placeat ipsam pariatur quo debitis itaque unde saepe optio, deleniti neque qui vero consequatur cupiditate.</p>
                        <div className='mt-16'>
                            <a href='/' className='uppercase px-8 py-6 font-bold text-base border rounded-full'>
                                Learn more
                            </a>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default HomeHero;