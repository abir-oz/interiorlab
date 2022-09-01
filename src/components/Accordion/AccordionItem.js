import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const AccordionItem = () => {
    const [isActive, setIsActive] = useState(false);
    const [maxHeight, setMaxHeight] = useState("max-h-0");
    const clickHandler = (e) => {
        e.preventDefault();
        setIsActive((prevState) => !prevState);

        isActive ? setMaxHeight("max-h-0") : setMaxHeight("max-h-96");
    }
    return (
        <div className="transition my-1">
            {/* Accordion Header */}
            <div onClick={clickHandler} className="cursor-pointer transition flex bg-gray-50 space-x-5 md:p-4 p-2 m-2 items-center max-h-32">
                <span>{isActive ? <FaChevronUp className='md:text-lg text-xs' /> : <FaChevronUp className='md:text-lg text-xs -scale-y-90 transition-all duration-300' />}</span>
                <h3> What is term?</h3>
            </div>

            {/* Accordion Content */}
            <div className={`accordion-content px-5 pt-0 overflow-hidden ${maxHeight}`}>
                <p className="leading-6 font-light pl-9 text-justify">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolore nulla accusamus vel voluptates. Veritatis officia fuga esse sapiente repudiandae?
                </p>
                <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
            </div>
        </div >
    );
};

export default AccordionItem;