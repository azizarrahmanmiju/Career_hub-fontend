import React, { useEffect, useState } from 'react';
import TitandDesc from '../Titanddesc/TitandDesc';
import Job from '../job/Job';

const Featurejobs = () => {

    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        fetch('jobs.json')
            .then(response => response.json())
            .then(data => setJobs(data));
        console.log(jobs);

    }, [])



    return (
        <div className='grid justify-center'>
            <TitandDesc title={"Feature Jobs"} description={"Explore thousands of job opportunities with all the information you need. Its your future"}></TitandDesc>
            <div className='grid grid-cols-2 mt-[50px] justify-center w-[900px] mx-auto'>
                {
                    jobs.map(job => {
                        return (
                            <Job key={job.div} Jobitem={job}></Job>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Featurejobs;