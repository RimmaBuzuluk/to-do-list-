import React, { useState } from 'react';
import { RootState } from '../store/index.ts';
import { useSelector } from 'react-redux';
import { IssueeItem } from './IssueeItem.tsx';

export const Board: React.FC = () => {
	const issuesSelector = useSelector((state: RootState) => state.issues) as any;

	const [boarders, setBoards] = useState([
		{
			id: 1,
			title: 'To Do',
			items: [
				{ id: 1, title: '1' },
				{ id: 2, title: '2' },
			],
		},
		{
			id: 2,
			title: 'In Progress',
			items: [
				{ id: 3, title: '3' },
				{ id: 4, title: '4' },
				{ id: 5, title: '5' },
				{ id: 6, title: '6' },
			],
		},
		{ id: 3, title: 'Done', items: [{ id: 7, title: '7' }] },
	]);
	const [currentBoard, setCurrentBoard] = useState(null);
	const [currentItem, setCurrentItem] = useState(null);

	const dragOverCardHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		if (e.currentTarget.classList.contains('item')) {
			// e.currentTarget.style.boxShadow = '0 2px 3px gray';
			e.currentTarget.style.background = 'red';
		}
	};

	// const dropCardHandler = (e: React.DragEvent<HTMLDivElement>, board: any) => {
	// 	// if (currentBoard != null) {
	// 	console.log(board);
	// 	// board.items.push(currentItem);
	// 	console.log(board);
	// 	const currentIndex = currentBoard.items.indexOf(currentItem);
	// 	console.log(currentBoard);
	// 	if (currentIndex.length === 0) {
	// 		board.items.push(currentItem);
	// 	}
	// 	// currentBoard.items.splice(currentIndex, 1);
	// 	// setBoards([...boarders]);
	// 	// }
	// };

	function dropCardHandler(e: React.DragEvent<HTMLDivElement>, board: any) {
		console.log('curre', board.items.length);
		if (board.items.length === 0) {
			board.items.push(currentItem);
			const currentIndex = currentBoard.items.indexOf(currentItem);

			currentBoard.items.splice(currentIndex, 1);
			console.log(boarders);
			setBoards([...boarders]);
		}
	}
	return (
		<div className='boards' style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '20px' }}>
			{boarders.map(board => (
				<div key={board.id} className='board' onDragOver={e => dragOverCardHandler(e)} onDrop={e => dropCardHandler(e, board)} style={{ width: '100%', border: '1px solid #000', padding: '5px' }}>
					<div className='boarderName'>{board.title}</div>
					<div className='boardItems' style={{ gap: '10px' }}>
						{board.items.map((item: any) => (
							<IssueeItem key={item.id} item={item} setCurrentItem={setCurrentItem} setCurrentBoard={setCurrentBoard} currentBoard={currentBoard} currentItem={currentItem} board={board} setBoards={setBoards} boarders={boarders} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};
