import React from 'react';
import '../style/Task.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index.ts';

export const Done: React.FC = () => {
	const repoSelector = useSelector((state: RootState) => state.issues) as any;

	console.log(repoSelector.issues);
	return (
		<div className='task'>
			<div className='titleTask'>Done</div>
			<div className='blockTask'>
				<div>lflf</div>
				<div>ffkfkfk</div>
				<div>lflf</div>
				<div>ffkfkfk</div>
				<div>lflf</div>
				<div>ffkfkfk</div>
			</div>
		</div>
	);
};
