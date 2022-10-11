import React from 'react';
import './Home';
import Image2 from '../assets/img2.jpg';

const Home = () => {
    return (
        <div className='overlay p-8' style={{ background: `url(${Image2})` }} >
            <div >
                <div>
                    <h3 className='uppercase text-3xl mt-8'>online learning</h3>
                    <h1 className='text-3xl sm:text-4xl md:text-7xl my-8'>Learn Everyday Programming</h1>
                    <h1 className='text-2xl md:text-3xl text-green-800 mb-2 md:mb-4 '>Code Foundations</h1>
                    <h1 className='mb-12'>Everyone’s talking about coding, but where do you start? This path will give you an introduction to the world of code and basic concepts. By the end, you’ll know whether Data Science, Computer Science or Web Development is right for you.</h1>

                    <button className="btn mr-10 btn-outline btn-accent">Button</button>

                    <button class="btn btn-outline btn-secondary">Button</button>

                    <div className='mt-10 grid xl:grid-cols-3 grid-cols-1 gap-5'>


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



                      
    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;