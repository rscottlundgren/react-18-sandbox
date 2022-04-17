import { useState, useEffect, useRef } from 'react';

function ToDo() {
	const [isLoading, setIsLoading] = useState(true);
	const [toDo, setToDo] = useState({});

	const isMounted = useRef(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((res) => res.json())
			.then((data) => {
				setTimeout(() => {
					if (isMounted.current) {
						setToDo(data);
						setIsLoading(false);
					}
				}, 3000);
			});

		// runs when component is unmounted
		return () => {
			// console.log(123);
			isMounted.current = false;
		};
	}, [isMounted]);

	return isLoading ? <h3>Loading...</h3> : <h1>{toDo.title}</h1>;
}
export default ToDo;
