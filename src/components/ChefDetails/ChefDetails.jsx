import React from 'react';
import { Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { picture, name, body } = chefDetails;
    return (
        <div>
            <Card className='w-75 mx-auto mt-4 mb-5'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <Link to="/chef" className='btn btn-danger d-flex align-items-center justify-content-center' style={{ width: '35%', gap: '5px' }}><FaArrowLeft></FaArrowLeft> All news in this category</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefDetails;