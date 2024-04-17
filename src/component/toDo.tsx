import React from 'react';
import '../style/Task.css';
import { IssueeItem } from './IssueeItem.tsx';
import { RootState } from '../store/index.ts';
import { useSelector } from 'react-redux';

export const ToDo: React.FC = () => {
	const issuesSelector = useSelector((state: RootState) => state.issues.issues);

	return (
		<div className='task'>
			<div className='titleTask'>To do</div>
			<div className='blockTask'>
				{issuesSelector.map((item: any) => (
					<IssueeItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};
