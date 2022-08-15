import React from 'react';
import { projectData } from '../../data/postData';
const Projects = () => (

    <div className="max-w-screen my-10">
        <div className='flex flex-wrap md:mx-8 xl:mx-16 mx-4 justify-center items-center'>{
            projectData.map((item, index) => (
                <div key={index} className="group lg:w-1/3 sm:w-1/2 w-full relative">
                    <div className='m-2 lg:m-8 text-center'>
                        <div className='w-full h-full overflow-hidden relative flex justify-center items-center'>
                            <img className='group-hover:scale-125 transition-all duration-1000 ease-in-out transform z-10' src={item.thumb} alt={item.title} />
                            <a className='border-2 py-2 px-3 m-2 absolute transition ease-out delay-100 duration-700 translate-y-16 group-hover:-translate-y-0 invisible group-hover:visible text-white z-50' href={`/${item.title}`}>{item.buttonText}</a>
                            <div className='w-full h-full top-0 left-0 border bg-orange-500 opacity-0 group-hover:opacity-80 transition ease-out delay-150 duration-300 z-10 absolute'></div>
                        </div>

                        <h3 className="uppercase font-display tracking-wider text-base font-bold my-4 mb-3 group-hover:text-orange-400">
                            <a href={`/${item.title}`}>
                                {item.title}
                            </a>
                        </h3>
                        <p className='text-xs uppercase m-0 text-gray-500'>{item.category}</p>
                        <div className='group-hover:bg-orange-500 z-50'></div>

                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Projects;