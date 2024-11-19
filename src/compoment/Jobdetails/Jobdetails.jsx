import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Jobdetails = () => {
    const job = useLoaderData(); // get the job object from the loader data

    const { id } = useParams(); // get the id from the url params

    const jobdetails = job.filter((job) => job.id === parseInt(id))

    console.log(jobdetails);


    return (
        <div>

        </div>
    );
};

export default Jobdetails;