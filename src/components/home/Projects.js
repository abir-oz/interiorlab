import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../../data/postData';
const Projects = () => (

    <div className="w-full my-10">
        <div className='xl:px-24 xl:mx-24 lg:mx-8 md:px-3 lg:px-8 md:mx-3 mx-3 px-3 flex flex-wrap justify-center items-center'>{
            projectData.map((item, index) => (
                <>
                    <div key={index} className="group lg:w-1/3 sm:w-1/2 w-full relative">
                        <div className='m-3 text-center'>
                            <div className='w-full h-full overflow-hidden relative flex justify-center items-center transition ease-in delay-200 duration-700'>
                                <img className='group-hover:scale-125 transition-all duration-1000 ease-in-out transform z-10' src={item.thumb} alt={item.title} />
                                <a className='border-2 py-2 px-3 m-2 absolute transition ease-out delay-100 duration-700 translate-y-16 group-hover:-translate-y-0 invisible group-hover:visible text-white z-50' href={`/${item.title}`}>{item.buttonText}</a>
                                <div className='w-full h-full top-0 left-0 border bg-ss-red-500 opacity-0 group-hover:opacity-80 transition ease-out delay-150 duration-300 z-10 absolute'></div>
                            </div>

                            <h3 className="uppercase font-display tracking-wider text-base font-bold my-4 mb-3 group-hover:text-ss-red-500">
                                <Link to={`/${item.title}`}>
                                    {item.title}
                                </Link>
                            </h3>
                            <p className='text-xs uppercase m-0 text-gray-500'>{item.category}</p>
                            <div className='group-hover:bg-ss-red-500 z-50'></div>

                        </div>
                    </div>

                </>
            ))}
        </div>
    </div>
);

export default Projects;