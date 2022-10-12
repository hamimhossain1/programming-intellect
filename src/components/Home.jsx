import React, { useContext } from 'react';
import './Home';
import Image2 from '../assets/img2.jpg';
import { Link, useLoaderData } from 'react-router-dom';
import { TopicsContext } from './Root';
import Topics from './Topics';

const Home = () => {
    const topics = useContext(TopicsContext);
    // console.log(topics)
    // const quizData = useLoaderData();
    // console.log(quizData)
    
    
    return (
        <div className='overlay p-8' style={{ background: `url(${Image2})` }} >
            <div >
                <div>
                    <h3 className='uppercase text-3xl mt-8'>online learning</h3>
                    <h1 className='text-3xl sm:text-4xl md:text-7xl my-8'>Learn Everyday Programming</h1>
                    <h1 className='text-2xl md:text-3xl text-green-800 mb-2 md:mb-4 '>Code Foundations</h1>
                    <h1 className='mb-12'>Everyone’s talking about coding, but where do you start? This path will give you an introduction to the world of code and basic concepts. By the end, you’ll know whether Data Science, Computer Science or Web Development is right for you.</h1>

                    <Link to='/blog'><button className="btn mr-10 btn-outline btn-accent">Blog</button></Link>

                    <Link to='/statistics'><button class="btn btn-outline btn-secondary">Statistics</button></Link>

                    
                    <div className='mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
                        {
                            topics.map(topic => <Topics
                                key={topic.id}
                                topic={topic}
                            
                            ></Topics>)
                        }
                    </div>





                    


                    {/* three extra cards */}
                    {/* <div className='mt-10 grid xl:grid-cols-3 grid-cols-1 gap-5'>
                        <div className="card  bg-gray-300 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">UNDERSTAND PROGRAMMING</h2>
                                <p>Get an overview of computer science, web development, and data science, as well as popular languages like JavaScript and Python.</p>
                            </div>
                        </div>
                        <div className="card  bg-gray-300 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">WRITE BASIC CODE</h2>
                                <p>Apply key programming concepts like variables and functions by writing your first lines of code.</p>
                            </div>
                        </div>
                        <div className="card  bg-gray-300 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">FIND YOUR FUTURE CAREER</h2>
                                <p>Determine your path after exploring different careers in tech and hearing from real-life web developers, data scientists, and more.</p>
                            </div>
                        </div>



                      
    
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;