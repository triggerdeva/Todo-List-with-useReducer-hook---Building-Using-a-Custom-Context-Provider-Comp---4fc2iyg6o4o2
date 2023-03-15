import React from 'react';
const Todo = ({ item, id, dispatch }) => {
	return (
		<div className="todo" id={id}>
			<div className="todo-title">{item}</div>
			<button
				className="todo-delete"
				onClick={() => {
					dispatch({
						type: 'removeItem',
						payload: id,
					});
				}}>
				Remove
			</button>
		</div>
	);
};

export { Todo };
