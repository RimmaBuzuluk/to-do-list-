import React from 'react';
import { Container } from 'react-bootstrap'; // Імпортуємо контейнер
import './App.css';

import { InputURL } from './component/InputURL.tsx';
import { Board } from './component/Board.tsx';

function App() {
	return (
		<div className='App'>
			<Container>
				<div className='title' style={{ display: 'flex', justifyContent: 'center' }}>
					To do List
				</div>
				<InputURL />
				<Board />

				{/* <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
					<ToDo />
					<InProgress />
					<Done />
				</div> */}
			</Container>
		</div>
	);
}

export default App;
