import React from 'react';
import { Link } from 'react-router-dom';

const WorkTypes = () => {
    return (
        <div className='w-full'>
            <div className="xl:px-24 xl:mx-24 lg:mx-8 md:px-3 lg:px-8 md:mx-3 mx-3 px-3 flex flex-wrap justify-center items-center">
                <div className="md:w-1/3 w-full">
                    <div className="m-3 overflow-hidden group">
                        <div className="relative">
                            <div className="max-w-full">
                                <img className='group-hover:scale-105 transition-all duration-700' src="https://i.ibb.co/dPtYdJq/image3.jpg" alt="" />
                            </div>
                            <div className='bg-black opacity-60'>
                                <h3 className="text-emerald-50 text-center p-2">
                                    HDB
                                </h3>
                            </div>
                            <Link target={"_blank"} className='absolute w-full h-full top-0 left-0' to="/hdb"></Link>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3 w-full">
                    <div className="m-3 overflow-hidden group">
                        <div className="relative">
                            <div className="max-w-full">
                                <img className='group-hover:scale-105 transition-all duration-700' src="https://i.ibb.co/dPtYdJq/image3.jpg" alt="" />
                            </div>
                            <div className='bg-black opacity-60'>
                                <h3 className="text-emerald-50 text-center p-2">
                                    HDB
                                </h3>
                            </div>
                            <Link className='absolute w-full h-full top-0 left-0' to="/condo"></Link>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3 w-full">
                    <div className="m-3 overflow-hidden group">
                        <div className="relative">
                            <div className="max-w-full">
                                <img className='group-hover:scale-105 transition-all duration-700' src="https://i.ibb.co/dPtYdJq/image3.jpg" alt="" />
                            </div>
                            <div className='bg-black opacity-60'>
                                <h3 className="text-emerald-50 text-center p-2">
                                    HDB
                                </h3>
                            </div>
                            <Link className='absolute w-full h-full top-0 left-0' to="/landed"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTypes;