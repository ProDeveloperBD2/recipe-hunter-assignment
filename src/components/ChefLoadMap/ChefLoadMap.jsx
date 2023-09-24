import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';
import Home from '../Home/Home';

const ChefLoadMap = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <Home></Home>
            <div className='card-area'>
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default ChefLoadMap;