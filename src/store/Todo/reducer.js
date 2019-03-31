const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ]
            }
        }

        case 'COMPLETE_TODO': {
            return {
                todos: state.todos.map(todo => 
                    (todo.id === action.id) ? {...todo, completed: true} : todo
                )
            }
        }

        case 'REMOVE_TODO': {
            const newTodos = [];

            for (let i in state.todos) {
                let todo = state.todos[i];

                if (todo.id !== action.id) newTodos.push(todo); 
            }

            return {
                todos: newTodos
            }
        }

        default: return state;
    }
}