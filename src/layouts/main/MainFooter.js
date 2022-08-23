import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';
import { footerData } from '../../data/postData';

const MainFooter = () => {
    return (
        <>
            <div className='w-full h-full bg-white border-t border-t-gray-300 footer-main'>
                <div className='lg:p-16 p-8 flex flex-wrap justify-center'>
                    <div className="lg:w-2/5 w-full">
                        <div className='xl:mx-24 lg:mx-16 my-4 text-center md:text-left'>
                            {/* logo */}
                            <div className='mb-6 w-full'>
                                <img src={logo} alt='logo' className='w-16 mx-auto md:mx-0' />
                            </div>
                            <div>
                                <p className='text-sm text-slate-700'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, dolorum atque quibusdam, animi maiores odit quae dolore minus facilis iste velit eos quis possimus tenetur.
                                </p>
                            </div>
                            <div className='flex flex-nowrap md:justify-start justify-center items-center space-x-4 mt-4 text-ss-red-400'>
                                <FaFacebook />
                                <FaInstagram />
                                <FaWhatsapp />
                                <FaTwitter />
                                <FaLinkedin />
                                <FaYoutube />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/5 lg:mt-24 text-center md:text-left">
                        <div className='xl:mx-28 lg:mx-12 my-4 flex flex-wrap justify-center'>
                            {
                                footerData.map((item, index) => (
                                    <div key={index} className="md:w-1/3 w-full md:mt-3 mt-3">
                                        <h4>
                                            <span className='text-ss-red-400'>{item.title}</span>
                                        </h4>
                                        <div>
                                            <ul>
                                                {
                                                    item.items.map((li, key) => (
                                                        <li key={key}>
                                                            <a href={li.url}>{li.name}</a>
                                                        </li>))

                                                }
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* copy */}
                <div className='flex items-center py-6 xl:px-16 px-8 text-sm text-slate-500'>
                    <p className='xl:ml-24 ml-0 mb-8'>© 2020 Set Square Pte Ltd. All rights reserved.</p>
                </div>
            </div>
        </>

    );
};

export default MainFooter;