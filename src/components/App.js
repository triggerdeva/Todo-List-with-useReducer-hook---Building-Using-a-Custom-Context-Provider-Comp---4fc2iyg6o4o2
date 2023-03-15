import React, { useReducer } from 'react';
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
	const [state, dispatch] = useReducer(todoReducer, []);

	return (
		<div id="main">
			<AddTodo dispatch={dispatch} />
			{state.map((item, idx) => (
				<Todo dispatch={dispatch} key={idx} id={idx} item={item} />
			))}
		</div>
	);
};

export default App;
