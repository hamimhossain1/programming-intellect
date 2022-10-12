import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const QuizQuestions = () => {

    const allQuiz = useLoaderData();
    const showQuiz = allQuiz.data.questions;
    console.log(allQuiz.data.questions)

    

    return (
        <div>
            <div className='grid grid-cols-1 gap-2 '>
            {
                showQuiz.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                // correctAnswerShow={correctAnswerShow}
                ></Quiz>)
            }
            </div>
        </div>
    );
};

export default QuizQuestions;