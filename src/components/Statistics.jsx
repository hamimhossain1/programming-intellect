import React, { useContext } from 'react';
import { TopicsContext } from './Root';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const topics = useContext(TopicsContext);
    console.log(topics)
    return (
        <div>
            <h1 className='text-3xl font-bold'>This is statistics</h1>
            <LineChart className='mx-auto my-16' width={800} height={500} data={topics}>
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;