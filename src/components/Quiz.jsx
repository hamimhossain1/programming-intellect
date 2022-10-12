import React from 'react';

const Quiz = ({ quiz }) => {
    const { id, question, correctAnswer, options } = quiz;
    console.log(quiz)

    return (
        <div>
            <div className="card w-2/4 bg-base-300 shadow-xl mx-auto ">
                <div className="card-body ">
                    <h2 className="card-title">Question: {question}.</h2>
                    
                    <div className='grid gap-5 mt-8'>
                        {
                            options.map(option => <button className='text-left'
                            key={option.index}
                            > <input type="radio" name="radio-1" className="radio" /> a. {option}</button>)
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Quiz;