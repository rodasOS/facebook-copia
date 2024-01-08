import React from 'react';
import '../estilos/Home.css';
import Historia from './Historia';

const Home = () => {
	return (
		<div className='Home'>
			<div className='hijoHome left'>izquierda</div>
			<div className='hijoHome center'>
				<div className='contenedor-historias'>
					<Historia />
					<Historia />
					<Historia />
				</div>

				<div>
					<span class='material-symbols-outlined'>account_circle</span>
					<input type='text' placeholder='¿Qué estás pensando, Mario?' />
				</div>
				<hr />
				<div className='contenedor-estado'>
					<div>
						<span class='material-symbols-outlined'>video_camera_front</span>
						<strong>Video en vivo</strong>
					</div>
					<div>
						<span class='material-symbols-outlined'>photo_library</span>
						<strong>Foto/Video</strong>
					</div>
					<div>
						<span class='material-symbols-outlined'>mood</span>
						<strong>Sentimiento/Actividad</strong>
					</div>
				</div>
			</div>
			<div className='hijoHome right'>derecha</div>
		</div>
	);
};

export default Home;
