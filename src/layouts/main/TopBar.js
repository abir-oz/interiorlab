import React from 'react';
import { FaFacebook } from 'react-icons/fa'

const TopBar = () => {
    return (
        <div className="w-full py-4 bg-gray-100 font-sans text-sm leading-normal text-gray-800">
            <div className="container">
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <div className="xl:w-8/12 w-full">
                        <div className='relative text-center text-xs'>
                            <a href="tel:6345 6372"><span className="call-button">6345 6372</span> </a>
                            | 86 Joo Chiat Place, Singapore 427803 | HDB: HB-05-4684B
                        </div>
                    </div>

                    <div className="xl:w-4/12 w-full">
                        <div className='relative text-center'>
                            <a href="https://www.facebook.com/setsquarearchitects" target="_blank" rel="noOpener noReferrer"><FaFacebook className='text-xl' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;