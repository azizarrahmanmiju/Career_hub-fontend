import React from 'react';

const TitandDesc = ({ title, description }) => {
    return (
        <div className="container justify-center text-center">
            <h2 className='font-bold text-5xl text-black  mt-[100px]'>{title}</h2>
            <p className='text-sm text-center text-gray-400 mt-5 px-4'>{description}</p>
        </div>
    );
};

export default TitandDesc;