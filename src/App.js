import React, { Component } from 'react';
import { Header } from './components/Header';

import Filter from './container/Filter';
import TodoList from './container/TodoList';

import { Container, Row, Col } from 'react-bootstrap';

import './assets/css/app.css'


class App extends Component {
    render() {
		return (
			<div className="app">
				<Container>
					{
						[Header, TodoList, Filter].map((Comp, i) => (
							<div key={i}>
								<Row>
									<Col>
										<Comp/>
									</Col>
								</Row>
								<br/>
							</div>
						))
					}
				</Container>
			</div>
		);
    }
}

export default App;
