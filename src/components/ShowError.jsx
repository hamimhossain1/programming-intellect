import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from '../assets/error-Img.jpg';

const ShowError = () => {
    return (
        <div className=''>
            <div className='w-3/4 mx-auto m-20'>
            <img className='mx-auto' src={ErrorImage} alt="" />
            </div>
            <Link className='hover:bg-purple-300 text-green-700 text-3xl bg-slate-300 p-3 rounded-lg' to='/'>Back to homepage</Link>
        </div>
    );
};

export default ShowError;