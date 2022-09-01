import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../../data/postData';
const Works = () => (

    <div className="w-full my-10">
        <div className='xl:px-24 xl:mx-24 lg:mx-8 md:px-3 lg:px-8 md:mx-3 mx-3 px-3 flex flex-wrap justify-center items-center'>{
            projectData.map((item, index) => (
                <div key={index} className="lg:w-1/3 sm:w-1/2 w-full relative group">
                    <div className='m-3 text-center'>
                        <div className='w-full max-h-full'>
                            <img className='z-10' src={item.thumb} alt={item.title} />
                        </div>

                        <h3 className="uppercase font-display tracking-wider text-base font-bold my-4 mb-3  group-hover:text-ss-red-500">
                            {item.title}
                        </h3>
                        <Link className='absolute w-full h-full top-0 left-0 p-0 m-0 cursor-pointer' to={`/single`}>

                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Works;