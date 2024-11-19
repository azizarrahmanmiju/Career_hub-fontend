import React from 'react';
import Banner from '../Banner/Banner';
import Featurejobs from '../FeatureJobs/Featurejobs';

const Home = () => {
    return (
        <div className='grid'>
            <div className=' justify-center'><Banner></Banner></div>
            <Featurejobs></Featurejobs>


        </div>
    );
};

export default Home;