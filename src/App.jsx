import { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import { Route, Routes } from 'react-router';
import Perfil from './componentes/Perfil';
import Login from './componentes/Login';

const no = true;
function App() {
	const [datos, establecerdatos] = useState('');
	const hijoAPadre = (datosHijo) => {
		establecerdatos(datosHijo);
	};
	const detectar = () => {
		if (datos) {
			return (
				<>
					<Header />

					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/perfil' element={<Perfil />} />
					</Routes>
				</>
			);
		} else {
			return <Login hijoAPadre={hijoAPadre(no)} />;
		}
	};
	return <div className='App'>{detectar()}</div>;
}

export default App;
