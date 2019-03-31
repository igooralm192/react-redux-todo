import React from 'react';
import { Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { setFilter } from './../store/Filter/actions'

const Filter = ({ dispatch }) => (
    <Form className="footer">
        <div className="mb-3">
            <Form.Check onChange={() => dispatch(setFilter('active'))} inline label="Ativos" type="radio" name="visualizacao" defaultChecked/>
            <Form.Check onChange={() => dispatch(setFilter('completed'))} inline label="Completos" type="radio" name="visualizacao"/>
        </div>
    </Form>
)

export default connect()(Filter);
