import React, { useContext } from 'react';
import { TopicsContext } from './Root';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const topics = useContext(TopicsContext);
    console.log(topics)
    return (
        <div>
            <h1 className='text-3xl font-bold'>This is statistics</h1>

            <ResponsiveContainer className='mx-auto' width="60%" aspect={3}>
            <LineChart className=' my-16'
                width={800}
                height={500}
                data={topics}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                 }} >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div >
    );
};

export default Statistics;