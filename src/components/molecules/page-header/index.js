import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const PageHeader = ({ text }) => {
    return (
        <Row className='margin-top-md'>
            <Col>
                <h1>{text}</h1>
            </Col>
        </Row>
    );
};

PageHeader.propTypes = {
    text: PropTypes.string.isRequired
};

export default PageHeader;
