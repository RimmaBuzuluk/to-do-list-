import React, { useState } from 'react';
import { RootState } from '../store/index.ts';
import { useSelector } from 'react-redux';
import { IssueeItem } from './IssueeItem.tsx';

export const Board: React.FC = () => {
	const issuesSelector = useSelector((state: RootState) => state.issues) as any;

	const [boarders, setBoards] = useState([
		{ id: 1, title: 'To Do', items: issuesSelector.issues },
		{ id: 2, title: 'In Progress', items: [] },
		{ id: 3, title: 'Done', items: [] },
	]);

	return (
		<div className='boards' style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
			{boarders.map(board => (
				<div key={board.id} className='boarde' style={{ width: '100%', border: '1px solid #000', padding: '5px' }}>
					<div className='boarderName'>{board.title}</div>
					<div className='boardItems' style={{ gap: '10px' }}>
						{board.items.map((item: any) => (
							<IssueeItem key={item.id} item={item} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};
