import React from 'react';
import './ResultPage.css';

function ResultPage({ steps }) {
	return (
		<div className='result-page-container'>
			<div className='result-page-text'>
				Hurray!! You've finished the game. You took {steps}{' '}
				steps to finish the game
			</div>
		</div>
	);
}

export default ResultPage;
