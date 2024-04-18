import React from 'react';
import { Card } from 'react-bootstrap';

interface IssueeItemProps {
	item: any;
	setCurrentBoard: React.Dispatch<React.SetStateAction<any>>;
	setCurrentItem: React.Dispatch<React.SetStateAction<any>>;
	currentItem: any;
	currentBoard: any;
	board: any;
	setBoards: any;
	boarders: any;
}

export const IssueeItem: React.FC<IssueeItemProps> = ({ item, setCurrentBoard, setCurrentItem, currentBoard, currentItem, board, setBoards, boarders }) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const currentDate = new Date();
		const diffInDays = Math.floor((currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
		const diffInHours = Math.floor((currentDate.getTime() - date.getTime()) / (1000 * 60 * 60));

		if (diffInDays > 0) {
			return `${diffInDays} days ago`;
		} else {
			return `${diffInHours} hours ago`;
		}
	};

	const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		if (e.currentTarget.classList.contains('item')) {
			// e.currentTarget.style.boxShadow = '0 2px 3px gray';
			e.currentTarget.style.background = 'red';
		}
	};

	const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		// e.currentTarget.style.boxShadow = 'none';
		e.currentTarget.style.background = '#fff';
	};

	const dragStartHandler = (board: any, item: any) => (e: React.DragEvent<HTMLDivElement>) => {
		setCurrentBoard(board);
		setCurrentItem(item);
	};
	const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
		// e.currentTarget.style.boxShadow = 'none';
		e.currentTarget.style.background = '#fff';
	};

	const dropHandler = (e: React.DragEvent<HTMLDivElement>, board: any, item: any) => {
		e.preventDefault();
		// console.log(board, item);
		const currentIndex = currentBoard.items.indexOf(currentItem);
		// console.log('curr ite', currentItem);
		// console.log('curr', currentIndex);
		// console.log('board1', currentBoard);
		currentBoard.items.splice(currentIndex, 1);

		// console.log('board2', currentBoard);
		const dropIndex = board.items.indexOf(item);
		// console.log('dr', dropIndex);
		board.items.splice(dropIndex + 1, 0, currentItem);
		// console.log(boarders);
		setBoards([...boarders]);
	};

	return (
		<Card style={{ width: '100%', border: '1px solid #000', background: '#fff' }} onDragOver={dragOverHandler} onDragLeave={dragLeaveHandler} onDragStart={dragStartHandler(board, item)} onDragEnd={dragEndHandler} onDrop={e => dropHandler(e, board, item)} className='item' draggable={true}>
			<Card.Body>
				<Card.Title>{item.title}</Card.Title>
				<Card.Text>
					{item.number} opened {formatDate(item.updated_at)}
				</Card.Text>
				<Card.Text>
					{item.author_association} | Comment: {item.comments}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
