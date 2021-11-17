import React from 'react';
import './DifficultyLevel.css';

function DifficultyLevel({ onHandleClick }) {
	return (
		<div className='difficulty-level-container'>
			<h1 className='difficulty-level-heading'>
				Hii there!! Choose the difficulty level of memory
				game
			</h1>
			<button
				className='difficulty-level-btn'
				onClick={() => onHandleClick(4)}>
				Easy
			</button>
			<button
				className='difficulty-level-btn'
				onClick={() => onHandleClick(5)}>
				Medium
			</button>
			<button
				className='difficulty-level-btn'
				onClick={() => onHandleClick(6)}>
				Hard
			</button>
		</div>
	);
}

export default DifficultyLevel;
