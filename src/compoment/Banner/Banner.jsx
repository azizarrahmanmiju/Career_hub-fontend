import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 text-center md:text-left items-center lg:max-w-[1000px] mx-auto'>
            <div><h2 className='text-4xl lg:text-7xl font-bold items-center'>
                <span className='text-black'>One Step <br /> Closer To Your</span>
                <br></br>
                <span className='text-[#445EFF]'>Dream Job</span>
                <p className='text-[12px] w-96 mx-auto md:mx-0 mt-7 text-center md:text-left '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button type="button" class="text-white bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get Started</button>
            </h2></div>
            <div>
                <img src="/src/assets/images/user.png" alt="" />
            </div>

        </div>
    );
};

export default Banner;