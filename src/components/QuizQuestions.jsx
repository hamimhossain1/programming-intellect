import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizQuestions = () => {
    
    const allQuiz = useLoaderData();
    console.log(allQuiz)
    console.log('hello')
    return (
        <div>
            
        </div>
    );
};

export default QuizQuestions;