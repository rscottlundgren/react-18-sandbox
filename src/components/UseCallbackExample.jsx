import React, { useState, useCallback } from 'react';

function UseCallbackExample() {
	const [tasks, setTasks] = useState([]);

	const addTask = useCallback(() => {
		setTasks((prevState) => [...prevState, 'Some Task']);
	}, [setTasks]);

	return (
		<>
			<Button addTask={addTask} />
			{tasks.map((task, index) => (
				<p key={index}>{task}</p>
			))}
		</>
	);
}

const Button = React.memo(({ addTask }) => {
	console.log('Button Rendered!');
	return (
		<>
			<button className='btn btn-primary' onClick={addTask}>
				Add Task
			</button>
		</>
	);
});

export default UseCallbackExample;
