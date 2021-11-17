import React from 'react';
import './Card.css';

function Card({
	name,
	id,
	flippedCards,
	disabled,
	matchCards,
	handleClick
}) {
	return (
		<div
			className={`card ${
				flippedCards || matchCards ? 'flip' : ''
			}`}
			onClick={!disabled ? handleClick : null}>
			<img
				className='front-face'
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
				alt={name}
			/>
			<img
				className='back-face'
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZMJXDGDhurvl3yJFRKcV-my1LChRTxt_cQ&usqp=CAU'
				alt={name}
			/>
		</div>
	);
}

export default Card;
