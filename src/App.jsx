import { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import { Route, Routes } from 'react-router';
import Perfil from './componentes/Perfil';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/perfil" element={<Perfil />}/>
			</Routes>
		</div>
	);
}

export default App;
