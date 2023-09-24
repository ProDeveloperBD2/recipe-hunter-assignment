import React from 'react';
import HomePageImage from '../../assets/home-image.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='d-flex p-3 gap-1' style={{ backgroundColor: '#F0FAF1' }}>
                <div className='w-50'>
                    <h1 className='mb-3 mt-4'>Start eating, feeling and living better today. Build good habits with us and our meal plans.</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima nam, distinctio sit, est explicabo vel sequi sed culpa quae commodi magni non aperiam, provident iure? Eligendi quas dicta tenetur!</p>
                    <Link to="/chef" style={{ backgroundColor: '#96F796' }} className='btn px-4 fw-semibold text-white text-decoration-none'>View Meal Plans</Link>
                </div>
                <div className='w-50'>
                    <img className='w-100' src={HomePageImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;