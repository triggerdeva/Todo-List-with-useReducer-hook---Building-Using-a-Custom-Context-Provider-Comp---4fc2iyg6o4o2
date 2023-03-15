import React, { useState } from 'react';

const AddTodo = ({ dispatch }) => {
	const [input, setInput] = useState('');
	return (
		<form
			id="todo-form"
			onSubmit={e => {
				e.preventDefault();
			}}>
			<input
				id="todo-input"
				value={input}
				onChange={e => setInput(e.target.value)}
				type={'text'}
			/>
			<button
				type="submit"
				onClick={() => {
					dispatch({
						type: 'addItem',
						id: Date.now(),
						title: input,
					});
					setInput('');
				}}>
				Add
			</button>
		</form>
	);
};

export { AddTodo };
