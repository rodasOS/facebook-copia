import React from 'react';
import '../estilos/Header.css';
import icono from '../assets/icono.ico';

const Header = () => {
	return (
		<div className='Header'>
			<div className='contenedor-buscador'>
				<img src={icono} alt='' />
				<input type='text' placeholder='🔍 Busca en Facebook' className='buscador' />
			</div>
			<ul className='lista-1'>
				<li>
					<span class='material-symbols-outlined'>home</span>
				</li>
				<li>
					<span class='material-symbols-outlined'>tv</span>
				</li>
				<li>
					<span class='material-symbols-outlined'>diversity_3</span>
				</li>
				<li>
					<span class='material-symbols-outlined'>stadia_controller</span>
				</li>
			</ul>
			<ul className='lista-2'>
				<li>
					<span class='material-symbols-outlined'>mail</span>
				</li>
				<li>
					<span class='material-symbols-outlined'>notifications</span>
				</li>
				<li>
					<span class='material-symbols-outlined'>account_circle</span>
				</li>
			</ul>
		</div>
	);
};

export default Header;
