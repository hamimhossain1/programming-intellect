import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export const TopicsContext = createContext();


const Root = () => {
    const data = useLoaderData();
    const topics = data.data;
    // console.log(topics)



    return (
        <div>
            <TopicsContext.Provider value={topics}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </TopicsContext.Provider>
        </div>
    );
};

export default Root;