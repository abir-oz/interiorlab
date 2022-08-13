import React from 'react';
import { FaFacebook } from 'react-icons/fa'

const TopBar = () => {
    return (
        <div className="w-full md:py-2 py-1 bg-gray-100 font-sans text-sm leading-normal text-gray-800">
            <div className="container">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-y-2">
                    <div className="xl:w-8/12 w-full">
                        <div className='relative text-center text-xs px-3'>
                            <a href="tel:6345 6372"><span className="call-button">6345 6372</span> </a>
                            | 86 Joo Chiat Place, Singapore 427803 | HDB: HB-05-4684B
                        </div>
                    </div>

                    <div className="xl:w-4/12 w-full">
                        <div className='relative text-center mx-auto'>
                            <a className='inline-block' href="https://www.facebook.com/setsquarearchitects" target="_blank" rel="noOpener noReferrer"><FaFacebook className='text-xl' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;