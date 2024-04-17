import React from 'react';
import { Container } from 'react-bootstrap'; // Імпортуємо контейнер
import './App.css';
import { ToDo } from './component/toDo.tsx';
import { InProgress } from './component/InProgress.tsx';
import { Done } from './component/Done.tsx';
import { InputURL } from './component/InputURL.tsx';

function App() {
	return (
		<div className='App'>
			<Container>
				<div className='title' style={{ display: 'flex', justifyContent: 'center' }}>
					To do List
				</div>
				<InputURL />

				<div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
					<ToDo />
					<InProgress />
					<Done />
				</div>
			</Container>
		</div>
	);
}

export default App;
