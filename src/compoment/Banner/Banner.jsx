import React from 'react';
import Button from '../Button/Button';

const Banner = () => {
    return (
        <div className=" bg-purple-50  flex justify-center items-center pt-10">
            <div className='grid grid-cols-1 md:grid-cols-2 text-center md:text-left  items-center lg:max-w-[1000px] mx-auto'>
                <div className=' justify-center grid'>
                    <h2 className='text-4xl text-poppins lg:text-6xl font-bold items-center'>
                        <span className='text-black'>One Step <br /> Closer To Your</span>
                        <br></br>
                        <span className='text-[#445EFF]'>Dream Job</span>
                        <p className='text-[12px] w-96 mx-auto md:mx-0 mt-7 text-center md:text-left '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <div className='flex justify-center md:justify-start'>
                            <div className='w-40 '><Button>Get Started</Button></div>

                        </div>
                    </h2></div>
                <div>
                    <img src="/src/assets/images/user.png" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Banner;