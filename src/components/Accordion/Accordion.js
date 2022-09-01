import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = (e) => {


    return (
        <div className="m-h-screen my-10 grid place-items-center">
            <h3 className='uppercase m-0 font-bold font-display text-2xl tracking-wide'>FAQ</h3>
            <div className="w-10/12 mx-auto">
                <div className="bg-white md:p-10">
                    <AccordionItem />
                    <AccordionItem />
                </div>
            </div>
        </div>
    );
};

export default Accordion;