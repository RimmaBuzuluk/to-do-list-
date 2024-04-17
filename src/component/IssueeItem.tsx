import React from 'react';
import '../style/Task.css';
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
			return `${diffInDays} days agoy`;
		} else {
			return `${diffInHours} hours ago`;
		}
	};

	return (
		<Card style={{ width: '18rem', border: '1px solid #000', background: '#fff' }}>
			<Card.Body>
				<Card.Title>{item.title}</Card.Title>
				<Card.Text>
					{item.number} opend {formatDate(item.updated_at)}
				</Card.Text>
				<Card.Text>
					{item.author_association}| Comment: {item.comments}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
