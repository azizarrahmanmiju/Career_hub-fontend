import React, { useEffect, useState } from 'react';
import TitandDesc from '../Titanddesc/TitandDesc';
import Job from '../job/Job';
import Button from '../Button/Button';

const Featurejobs = () => {
    const [status, setstatus] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [jobsize, setjobsize] = useState(4);


    useEffect(() => {
        fetch('jobs.json')
            .then(response => response.json())
            .then(data => setJobs(data));
        console.log(jobs);

    }, [])

    const onclick = () => {
        const size = jobs.length;
        setjobsize((status) ? 4 : size);
        setstatus(!status);
    }



    return (
        <div className='grid justify-center'>
            <TitandDesc title={"Feature Jobs"} description={"Explore thousands of job opportunities with all the information you need. Its your future"}></TitandDesc>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-[50px] justify-center max-w-[900px] mx-auto'>
                {
                    jobs.slice(0, jobsize).map(job => {
                        return (
                            <Job key={job.div} Jobitem={job}></Job>
                        )
                    })
                }

            </div>

            <div className='justify-center w-full  flex mt-10'>
                <Button onClick={onclick}> {(status) ? "Show Less" : "Show More"} </Button>
            </div>
        </div>
    );
};

export default Featurejobs;