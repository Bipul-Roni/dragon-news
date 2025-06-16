import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qjzone from './Qjzone';

const RightAside = () => {
    return (
        <div className='flex flex-col gap-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qjzone></Qjzone>
        </div>
    );
};

export default RightAside;