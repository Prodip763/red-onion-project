import React from "react";
import useData from "../../../hooks/useData/useData";
import Cart from "../Cart/Cart";
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

const Dinner = () => {
    const [datas, setdatas] = useData();

    return (
        <Container>
            <Row className="gap-4 m-4 ">
                {
                    datas.map(data => <Cart key={data.id} data={data}></Cart>)
                }
            </Row>
        </Container>
    );
};

export default Dinner;