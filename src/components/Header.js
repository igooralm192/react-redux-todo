import React from 'react';
import AddTodo from '../container/AddTodo';

export const Header = () => (
    <div className="header">
		<h1 className="title text-center">To Do List</h1>
		<p className="text-center">Sua lista de afazeres!</p>
		<AddTodo/>
    </div>
)
