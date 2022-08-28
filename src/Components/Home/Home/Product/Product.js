import React from "react";
import { Button, Card } from "react-bootstrap";
import picture from '../../../../images/adult-blur-blurred-background-687824.png'
import picture1 from '../../../../images/architecture-building-city-2047397.png'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
const Product = () => {
    return (
        <div className="mt-5 text-start container">
            <h3>Why you choose us</h3>
            <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            <div className=" d-flex gap-4 justify-content-center mt-4">
            <Card style={{ width: '18rem' }} className=' shadow-lg'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <div className="d-flex gap-2">
                    <Card.Text className="text-start bg-danger rounded"><Icon icon="fe:bus" />
                    </Card.Text>
                    <Card.Title>Fast Delevery</Card.Title>
                    </div>
                    <Card.Text className="text-start">Keep your systems in sync with autonated web hook based notification each time is paid and how we dream about our future.
                    </Card.Text>
                    <Link to=''><span >See more <Icon style={{color: 'black'}} className="bg-danger rounded " icon="ant-design:arrow-right-outlined" /></span></Link>

                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className=' shadow-lg '>
                <Card.Img variant="top" src={picture1} />
                <Card.Body>
                    <div className="d-flex gap-2">
                    <Card.Text className="text-start bg-danger rounded"><Icon icon="fe:bus" />
                    </Card.Text>
                    <Card.Title>Home Delevery</Card.Title>
                    </div>
                    <Card.Text className="text-start">Keep your systems in sync with autonated web hook based notification each time is paid and how we dream about our future.
                    </Card.Text>
                    <Link to=''><span >See more <Icon style={{color: 'black'}} className="bg-danger rounded " icon="ant-design:arrow-right-outlined" /></span></Link>

                </Card.Body>
            </Card>
            </div>
        </div>
    );
};


export default Product;