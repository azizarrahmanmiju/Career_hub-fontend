import React from 'react';
import TextWithIcon from '../../Utilities/textwithIcon/textwithIcon';
import Button from '../Button/Button';

const Job = ({ Jobitem }) => {

    const { company_name, logo, job_title, remote_or_onsite, location, job_type, salary, } = Jobitem;
    return (
        <div className='border p-4 rounded-lg m-2'>

            <img className='w-20 mt-3' src={logo} alt="Opps!!" />
            <p className='text-xl font-medium text-black mt-5'>{job_title}</p>
            <h2 className='text-lg font-medium text-gray-400 mt-3'>{company_name}</h2>
            <div className='mt-4'>
                <button className='border-2 border-purple-500 p-1 mt-2 mb-2 mr-2 rounded-lg text-purple-500'>{remote_or_onsite}</button>
                <button className='border-2 border-purple-500 p-1 mt-2 mb-2 mr-2 rounded-lg text-purple-500'>{job_type}</button>
            </div>
            <div className='mt-4 flex gap-4'>
                <TextWithIcon text={location} icon={"/src/assets/icons/Location2.png"}></TextWithIcon>
                <TextWithIcon text={salary} icon={"/src/assets/icons/money.png"}></TextWithIcon>
            </div>

            <div className='mt-5'> <Button>View Details</Button></div>



        </div>
    );
};

export default Job;