import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Quiz = ({ quiz }) => {
    const { id, question, correctAnswer, options } = quiz;
    console.log(quiz)

    const correctAnswerShow = () => {
        toast(correctAnswer);
    }

    return (
        <div>
            <div className="card w-11/12 md:w-2/4 bg-base-300 shadow-xl mx-auto mb-7 mt-5">
                <div className="card-body relative ">
                    <h2 className="card-title text-green-900">Question:  {question}.</h2>

                    <div className='grid gap-5 mt-8'>
                        {
                            options.map(option =>
                                <div >
                                    <button onClick={e => {
                                        if (e.target.innerText.replace(/\s/g, '') === correctAnswer.replace(/\s/g, '')) {
                                            toast("Correct");
                                        }
                                        else {
                                            toast("False");
                                        }
                                    }
                                    }> {option}</button>
                                </div>
                            )
                        }
                    </div>

                    <button onClick={() => correctAnswerShow(quiz)}>
                        <FontAwesomeIcon className=' absolute top-1 text-purple-800 text-2xl right-3' icon={faEye}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <ToastContainer position='top-center' autoClose={1000} />
        </div>
    );
};

export default Quiz;
