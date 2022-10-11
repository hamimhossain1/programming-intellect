import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 gap-8 mt-16'>
            <div className="card  mx-auto w-3/4 bg-base-300 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">1. What is the purpose of react router?</h2>
                    <p>Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
            </div>
            <div className="card  mx-auto w-3/4 bg-base-300 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">2. How dose context API work?</h2>
                    <p>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. </p>
                </div>
            </div>
            <div className="card mb-40  mx-auto w-3/4 bg-base-300 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">3. Define about 'useRef hook'.</h2>
                    <p>Ans: Ref means just reference, so it can be a reference to anything DOM node, Javascript value, etc. The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;