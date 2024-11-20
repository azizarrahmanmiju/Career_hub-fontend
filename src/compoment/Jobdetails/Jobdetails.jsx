import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetailsbanner from '../Banner/JobDetailsbanner';
import Button from '../Button/Button';
import TextWithIcon from '../../Utilities/textwithIcon/textwithIcon';
import "./jobde.css"

const Jobdetails = () => {
    const job = useLoaderData(); // get the job object from the loader data
    const { id } = useParams(); // get the id from the url params

    const jobdetails = job.filter((job) => job.id === parseInt(id));

    console.log(jobdetails);

    return (
        <div className='grid  mx-auto'>
            {/* Banner */}
            <JobDetailsbanner />

            {/* Content Below Banner */}
            <div className="text-center  container mx-auto mt-[450px] w-4/5 grid-cols-1 md:flex gap-10">
                <div className='grid gap-10 md:w-2/3 lg:w-2/3'>
                    <p className='text-left' ><span className='font-semibold text-black'>Job Description:</span>{jobdetails[0].job_description}</p>
                    <p className='text-left' ><span className='font-semibold text-black'>Job Description:</span>{jobdetails[0].job_responsibility}</p>
                    <p className='text-left'><span className='font-semibold text-black'>Educational Requirement:</span> <br></br>{jobdetails[0].educational_requirements}</p>
                    <p className='text-left'><span className='font-semibold text-black'>Educational Requirement:</span> <br></br>{jobdetails[0].experiences}</p>
                </div>
                <div className='md:w-1/3 lg:w-1/3 grid h-fit gap-4 mt-4'>
                    <div className='bg-purple-50 grid gap-2 shadow-md p-5 rounded' >

                        <p className='text-left  text-black font-semibold'>Job details</p>
                        <div className='h-[1px] bg-gray-300 mb-4'><h1></h1></div>
                        <TextWithIcon icon={"/src/assets/icons/money.png"} text={jobdetails[0].salary + "  (per month)"} texttitle={"salary: "} ></TextWithIcon>
                        <TextWithIcon icon={"/src/assets/icons/calendar.png"} text={jobdetails[0].job_title} texttitle={"job title: "}></TextWithIcon>


                        <p className='text-left  text-black font-semibold mt-5'>Contact Info</p>
                        <div className='h-[1px] bg-gray-300 mb-4'><h1></h1></div>
                        <TextWithIcon icon={"/src/assets/icons/phone.png"} text={jobdetails[0].contact_information.phone} texttitle={"Phone: "}></TextWithIcon>
                        <TextWithIcon icon={"/src/assets/icons/email.png"} text={jobdetails[0].contact_information.email} texttitle={"Email: "}></TextWithIcon>
                        <TextWithIcon icon={"/src/assets/icons/location2.png"} text={jobdetails[0].contact_information.address} texttitle={"address: "}></TextWithIcon>


                    </div>
                    <div className=' w-full'>
                        <Button >Apply Now</Button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Jobdetails;
