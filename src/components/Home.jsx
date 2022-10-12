import React, { useContext } from 'react';
import './Home';
import Image2 from '../assets/img2.jpg';
import { Link } from 'react-router-dom';
import { TopicsContext } from './Root';
import Topics from './Topics';

const Home = () => {
    const topics = useContext(TopicsContext);
    
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
                </div>
            </div>
        </div>
    );
};

export default Home;