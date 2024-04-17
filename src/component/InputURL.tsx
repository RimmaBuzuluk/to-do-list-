import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../style/InputURL.model.css';
import { useDispatch } from 'react-redux';
import { fetchIssues } from '../store/ruduser/issueesReduser.ts';
// import { fetchIssues } from '../store/ruduser/issueesReduser';

export const InputURL: React.FC = () => {
	const dispatch = useDispatch();
	const [url, setUrl] = useState<string>('');
	const [userName, setUserName] = useState<string>('');
	const [repo, setRepo] = useState<string>('');
	const [error, setError] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		const urlParts = url.split('/');
		if (!url.startsWith('https://github.com')) {
			setError('Invalid URL format. Please enter a valid GitHub Url');
			alert(error);
			return;
		}
		if (!urlParts[3] || !urlParts[4]) {
			setError('Please enter both username and repository name.');
			alert(error);
			return;
		}

		setUserName(urlParts[3]);
		setRepo(urlParts[4]);

		dispatch(fetchIssues({ owner: urlParts[3], repo: urlParts[4] }));
	};
	return (
		<>
			<Form style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Form.Group controlId='formBasicEmail' style={{ width: '85%', height: '36px' }}>
					<FormControl style={{ width: '100%', height: '100%' }} type='text' placeholder='Enter repo URL' onChange={handleInputChange} />
				</Form.Group>

				<Button variant='primary' type='submit' style={{ width: '10%', height: '36px', background: '#fff' }} onClick={handleSubmit}>
					Load issues
				</Button>
			</Form>
			<Form style={{ display: 'flex', alignItems: 'center' }}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div>{userName}</div>
					<div>{'>'}</div>
					<div>{repo}</div>
				</div>
				<div>194 K stars</div>
			</Form>
		</>
	);
};
