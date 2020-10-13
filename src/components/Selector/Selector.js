import React, { useState, useEffect } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Selector = props => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [inputData, setInputData] = useState([]);
    const [loading, setLoading] = useState(false);

    const { data } = props;

    useEffect(() => {
        setLoading(true);

        if (data !== null && data.length > 0) {
            setInputData(data)
        }

        setLoading(false)

    }, [data])


    const handleListItemClick = () => {
        console.log("clicked")
    }

    let renderList = null;
    let renderDetails = null;

    if (inputData.length > 0) {
        renderList = (<ListGroup>
            <ListGroup.Item action onClick={handleListItemClick}>Cras justo odio</ListGroup.Item>
            <ListGroup.Item action onClick={handleListItemClick}>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item action onClick={handleListItemClick}>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item action onClick={handleListItemClick}>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item action onClick={handleListItemClick}>Vestibulum at eros</ListGroup.Item>
        </ListGroup>)
    }

    return (
        <Row>
            <Col>
                {renderList}
            </Col>
            <Col>
                {renderDetails}
            </Col>
        </Row>
    )
}

export default Selector
