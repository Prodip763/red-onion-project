import React from "react";
import {Card, ListGroup, Button} from 'react-bootstrap';


const Cart = ({data}) =>{
    const {name,price,description,picture} = data;
    return(
        <Card style={{ width: '18rem' }} className='shadow-lg'>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-start">{description}
          </Card.Text>
          <ListGroup.Item className="fs-5 mb-2 danger">{price}</ListGroup.Item>
          <Button variant="danger">Add to cart</Button>
        </Card.Body>
      </Card>
    );
};

export default Cart;