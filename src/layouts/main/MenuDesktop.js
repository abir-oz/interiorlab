import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import menuConfig from './MenuConfig';


const MenuDesktop = () => {
    return (
        <div role="navigation"
            className="w-full font-display hidden lg:flex">
            <div className="container mx-auto my-0 py-[15px]">
                <div className="flex flex-row justify-center items-center">
                    <div className="w-full xl:w-4/12 lg:w-3/12 px-[15px]">
                        <div>
                            <NavLink to="/">
                                <img src={logo} alt="logo" className="h-[140px] mx-auto" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-8/12 lg:w-9/12 sm:text-right xl:text-center text-center px-[15px] lg:px-[10px]">
                        <nav className="relative py-[15px] z-[1]">
                            <ul className="list-none font-[700] leading-none p-0 -mx-2 text-black uppercase">
                                {menuConfig.map((item, index) => (
                                    <li className="inline-block mx-2 " key={index}>
                                        <NavLink className={({ isActive }) => isActive ? "active" : "nav_link"} to={item.path}>{item.title}</NavLink>
                                    </li>
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