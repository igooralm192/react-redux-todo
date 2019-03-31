import React, { Component } from 'react';
import { ButtonToolbar, Button, ButtonGroup, FormControl, Row, Col } from 'react-bootstrap';
import './../assets/css/todo.css'

export class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: props.text,
			editMode: false
		}
	}

	render() {
		const { completed, completeTodo, removeTodo } = this.props;

		return (
			<Row>
				<Col fluid="true">
					{
						!this.state.editMode ? this.state.text :
						<FormControl size="sm" onChange={(e) => this.setState({text: e.target.value})} value={this.state.text}/>
					}
				</Col>
				<Col sm="auto">
					{
						!completed &&
						<ButtonToolbar className="actions float-right">
							<ButtonGroup className="mr-2">
								
								<Button variant="success" onClick={(id) => completeTodo(id)}>
									<i className="fa fa-check"></i>
								</Button>
							</ButtonGroup>
							<ButtonGroup className="mr-2">
								<Button variant="warning" onClick={() => this.setState({editMode: !this.state.editMode})}>
									<i className="fa fa-edit"></i>
								</Button>
							</ButtonGroup>
							<ButtonGroup>
								<Button variant="danger" onClick={(id) => removeTodo(id)}>
									<i className="fa fa-times"></i>
								</Button>
							</ButtonGroup>
						</ButtonToolbar>
					}
					
				</Col>
			</Row>
		)
	}
}

    

