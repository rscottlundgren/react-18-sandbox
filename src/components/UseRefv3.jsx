import { useState } from 'react';
import ToDo from './ToDo';

function UseRefv3() {
	const [showToDo, setShowToDo] = useState(true);

	return (
		<>
			{showToDo && <ToDo />}
			<button
				className='btn btn-primary'
				onClick={() => setShowToDo(!showToDo)}>
				Toggle ToDo
			</button>
		</>
	);
}
export default UseRefv3;
