import { useRef } from 'react';

function useRefv1() {
	const inputRef = useRef();
  const paraRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(inputRef.current.value);
		inputRef.current.value = 'Yo Mama...';
		inputRef.current.style.backgroundColor = 'lightblue';
    paraRef.current.innerText = 'Later Gator!'
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					ref={inputRef}
					id='name'
					className='form-control mb-2'
				/>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
        <p onClick={() => inputRef.current.focus()} {ref={paraRef}>Hello, Friend!</p>
			</form>
		</>
	);
}
export default useRefv1;
