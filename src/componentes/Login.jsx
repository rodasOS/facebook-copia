import React from 'react';

const Login = (hijoAPadre) => {
	const validar = () => {
		const nombre = document.getElementById('in').value;
		if (nombre === 'mario') {
			hijoAPadre();
		} else {
			alert('salio mal');
		}
	};
	return (
		<div className='Login'>
			<h1>No está logueado</h1>
			<input type='text' id='in' />
			<button onClick={hijoAPadre}>hola</button>
		</div>
	);
};

export default Login;
