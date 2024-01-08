import { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';

function App() {
	return (
		<div className='App'>
			<Header />
			<Home />
		</div>
	);
}

export default App;
