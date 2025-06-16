import React from 'react';
import swimingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";

const Qjzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold'>Qzone </h1>
            <div className='space-y-5'>
                <img src={swimingImage} alt="" srcset="" />
                <img src={classImage} alt="" srcset="" />
                <img src={playImage} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Qjzone;