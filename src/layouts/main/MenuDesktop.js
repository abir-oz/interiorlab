import React from 'react';
import menuConfig from './MenuConfig';
import logo from '../../assets/logo.jpg'


const MenuDesktop = () => {
    return (
        <div role="navigation"
            className="w-full font-display hidden md:flex">
            <div className="container mx-auto my-0 py-[15px]">
                <div className="flex flex-row justify-center items-center">
                    <div className="w-full xl:w-4/12 px-[15px]">
                        <div>
                            <a href="index.html">
                                <img src={logo} alt="logo" className="h-[140px] mx-auto" />
                            </a>
                        </div>
                    </div>
                    <div className="w-8/12 sm:text-right xl:text-center text-center px-[15px]">
                        <nav className="relative py-[15px] z-[1]">
                            <ul className="list-none font-[700] leading-none p-0 -mx-2 text-black uppercase">
                                {menuConfig.map((item, index) => (
                                    <li className="inline-block mx-2 " key={index}><a className='hover:underline decoration-orange-600 decoration-1 underline-offset-4' href={item.path}>{item.title}</a></li>
                                ))}
                            </ul>

                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuDesktop;