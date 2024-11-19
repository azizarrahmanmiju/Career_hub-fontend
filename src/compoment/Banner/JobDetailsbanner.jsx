import React from 'react';

const JobDetailsbanner = () => {
    return (
        <div className='flex justify-center bg-purple-50 items-center absolute h-[400px] w-full' >

            <img src='/src/assets/images/bg2.png'
                className="absolute top-0 -right-0"></img>

            <img src='/src/assets/images/bg1.png'
                className="absolute bottom-0 left-0"></img>
            <h1 className='text-4xl text-center font-bold text-purple-950'>Job Details</h1>

        </div>
    );
};

export default JobDetailsbanner;