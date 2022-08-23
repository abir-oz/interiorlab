import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';

const MainFooter = () => {
    return (
        <>
            <div className='w-full h-full bg-white border-t border-t-gray-300 footer-main'>
                <div className='p-16 flex'>
                    <div className="w-2/5">
                        <div className='mx-24 my-4'>
                            {/* logo */}
                            <div className='mb-6'>
                                <img src={logo} alt='logo' className='w-16' />
                            </div>
                            <div>
                                <p className='text-sm text-slate-700'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, dolorum atque quibusdam, animi maiores odit quae dolore minus facilis iste velit eos quis possimus tenetur.
                                </p>
                            </div>
                            <div className='flex flex-nowrap items-center space-x-4 mt-4 text-ss-red-400'>
                                <FaFacebook />
                                <FaInstagram />
                                <FaWhatsapp />
                                <FaTwitter />
                                <FaLinkedin />
                                <FaYoutube />
                            </div>
                        </div>
                    </div>

                    <div className="w-3/5 mt-24">
                        <div className='ml-28 my-4 flex'>
                            <div className="w-1/3">
                                <h4>
                                    <span className='text-ss-red-400'>Set Square</span>
                                </h4>
                                <div>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>FAQs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <h4>
                                    <span className='text-ss-red-400'>Legal</span>
                                </h4>
                                <ul>
                                    <li>Terms and Conditions</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div className="w-1/3">
                                <h4>
                                    <span className='text-ss-red-400'>Contacts</span>
                                </h4>
                                <ul>
                                    <li>support@setsquare.com</li>
                                    <li>Dhaka, Bangladesh</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* copy */}
                <div className='flex items-center py-6 px-16 text-sm text-slate-500'>
                    <p className='ml-24 mb-8'>© 2020 Set Square Pte Ltd. All rights reserved.</p>
                </div>
            </div>
        </>

    );
};

export default MainFooter;