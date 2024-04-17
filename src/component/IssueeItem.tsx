import React from 'react';
import { Card } from 'react-bootstrap';

interface IssueeItemProps {
	item: any;
}

export const IssueeItem: React.FC<IssueeItemProps> = ({ item }) => {
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
			e.currentTarget.style.boxShadow = '0 2px 3px gray';
			e.currentTarget.style.background = 'red';
		}
	};

	const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.currentTarget.style.boxShadow = 'none';
		e.currentTarget.style.background = '#fff';
	};

	const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {};

	const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.currentTarget.style.boxShadow = 'none';
		e.currentTarget.style.background = '#fff';
	};

	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.currentTarget.style.boxShadow = 'none';
	};

	return (
		<Card style={{ width: '100%', border: '1px solid #000', background: '#fff' }} onDragOver={dragOverHandler} onDragLeave={dragLeaveHandler} onDragStart={dragStartHandler} onDragEnd={dragEndHandler} onDrop={dropHandler} className='item' draggable={true}>
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
