import React from 'react';
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';

const MainFooter = () => {
    return (
        <div className='w-full bg-slate-50 overflow-hidden text-sm text-ss-red-500 opacity-80'>
            <div className='md:mx-48 md:py-24 mx-8 py-10'>
                <FaPhone className='inline text-slate-400 md:mr-5 mr-2' /> +65 6345 6372 <br />
                <FaEnvelope className='inline text-slate-400 md:mr-5 mr-2' />enquiry@theinteriorlab.com.sg <br />
                <FaMapMarker className='inline text-slate-400 md:mr-5 mr-2' />86 Joo Chiat Place, Singapore 427803 <br />
                <FaMapMarker className='inline text-slate-400 md:mr-5 mr-2' />114 Lavender Street #07-80, CT Hub 2, Singapore 338729 <br />
                <FaMapMarker className='inline text-slate-400 md:mr-5 mr-2' />38 Jalan Pemimpin #02-03 M38 Singapore 577178 <br />

                <br />
                <p className='text-slate-400'>© 2021 The Interior Lab Pte Ltd. All rights reserved.</p>
            </div>
        </div>
    );
};

export default MainFooter;