import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Topics = ({ topic }) => {
    const { logo, name } = topic;
    return (
        <div className=''>
            <div className="card  bg-green-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl w-1/4" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary ">Start Practice <FontAwesomeIcon className='ml-1' icon={faArrowRight}></FontAwesomeIcon> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topics;