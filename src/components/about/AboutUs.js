import React from 'react';

const AboutUs = () => {
    return (
        <div className="w-full mt-4">
            <div className="xl:mx-40 lg:mx-10 mx-5 flex flex-wrap">
                <div className="md:w-1/3 w-full">
                    <div className="xl:m-10 md:m-3 m-5">
                        <img className='w-96' src="https://i.ibb.co/GtDTjMH/about-image.jpg" alt="about" />
                    </div>
                </div>
                <div className="md:w-2/3 w-full">
                    <div className="xl:m-10 md:m-3 m-5">
                        <h2 className='text-2xl mb-5 tracking-normal'>The Interior Lab – The Chemistry of Arts. Where creativity, innovation, and unique designs come together to create your dream home.</h2>
                        <div className='text-gray-500 text-justify'>
                            <p className="mb-3">
                                The Interior Lab is an established interior design company in Singapore that centers on bringing beautiful and aspirational designs to life. But because beauty lies not only in the aesthetic, the firm also places immense importance in tailoring to their client’s sensibilities and comfort.
                            </p>
                            <p className="mb-3">
                                Founded by a pair of industry veterans with over a decade of experience, The Interior Lab has a strong 30-member team of designers who are passionate about good design. Daring with their ideas yet meticulous in their execution, the knowledgeable and experienced team has managed a multitude of home and commercial projects to date.
                            </p>
                            <p className="mb-3">
                                Close, personal attention is given to every step of the project undertaken, and the client’s lifestyle, needs and wants are given due consideration. But the project’s completion doesn’t signal the end of the partnership between the client and the designer, because the firm also believes in following up closely even after the project is done.
                            </p>

                            <p className="mb-3">The Interior Lab’s instinct for stunning designs that marry style with substance integrates a range of elements, including bespoke built-ins and pieces, customised furniture and finishings, alongside carefully selected materials and accessories. And as a certified designer company of Austrian fittings manufacturer BLUM, homeowners are assured of the use of reliable and quality fittings for their home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;