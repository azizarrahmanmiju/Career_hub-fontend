import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.log(error)

    const handleGoback = () => {
        navigate(-1)// go back to previous page
    }

    return (
        <div className=' justify-center content-center text-center h-screen bg-white text-gray-600'>

            <h1 className='text-6xl font-bold p-4'>{error.status}</h1>

            <p>{error.statusText}</p>
            <h1 className='text-2xl font-semibold p-2' >Opps!!!</h1>
            <p>{error.error.message}</p>

            <button
                onClick={handleGoback}
                className="mt-6 px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-medium"
            >
                Go to Home
            </button>

        </div>
    );
};

export default Errorpage;