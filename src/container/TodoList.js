import React, { Component } from 'react';

import { Todo } from '../components/Todo';
import { completeTodo } from './../store/Todo/actions';
import { removeTodo } from './../store/Todo/actions';

import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

class TodoList extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { todos, filter, dispatch } = this.props;
        const type = filter === 'active' ? true : false;

        return (
            <ListGroup>
                {
                    todos.map(todo => (
                        ((type && !todo.completed) ||
                        (!type && todo.completed)) &&
                        <ListGroup.Item>
                            <Todo key={todo.id} {...todo} 
                                completeTodo={() => dispatch(completeTodo(todo.id))}
                                removeTodo={() => dispatch(removeTodo(todo.id))}
                            />
                        </ListGroup.Item>

                    ))
                }
            </ListGroup>
        )
    }
}

const mapStateToProps = store => ({
    todos: store.todo.todos,
    filter: store.filter.filter
})

export default connect(mapStateToProps)(TodoList)