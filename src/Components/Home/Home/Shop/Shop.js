import React from "react";
import useData from "../../../../hooks/useData/useData";
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Cart from "../../../Pages/Cart/Cart";
import { Button } from "react-bootstrap";

const Shop = () => {
    const [datas, setdatas] = useData();

    return (
        <Container>
            <Row className="gap-4 m-4 ">
                {
                    datas.map(data => <Cart key={data.id} data={data}></Cart>)
                }
            </Row>
            <span ><Button variant="primary">Checkout Your Food</Button></span>
        </Container>
    );
};

export default Shop;