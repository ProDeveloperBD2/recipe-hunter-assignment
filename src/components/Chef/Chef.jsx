import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Chef.css'
import { Link } from 'react-router-dom';

const Chef = (props) => {
    const { name, id, picture, body } = props.chef;
    return (
        <div className='mt-4 ms-3 me-3 mb-5'>
            <div className=''>
                <Card>
                    <Card.Img variant="top" className='w-100 h-75' src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {body}
                        </Card.Text>
                        <Link to={`/chef/${id}`} style={{ backgroundColor: '#96F796', border: 'none' }} className='btn px-4 fw-semibold text-black'>Details</Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Chef;