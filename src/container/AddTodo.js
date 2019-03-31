import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addTodo } from './../store/Todo/actions';


class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputTodo: ''
        }
    }

    render() {
        const { dispatch } = this.props;

        return (
            <Form>
                <Form.Row className="justify-content">
                    <Col fluid="true">
                        <Form.Control placeholder="Sua tarefa" onChange={(e) => this.setState({inputTodo: e.target.value})} value={this.state.inputTodo}/>
                    </Col>
                    <Col sm="auto">
                        <Button variant="success" onClick={() => dispatch(addTodo(this.state.inputTodo))}>Adicionar Tarefa</Button>
                    </Col>
                </Form.Row>
            </Form>  
        )
    }
}

export default connect()(AddTodo);
