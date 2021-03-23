import React from 'react'
import Card from '../Card/Card'
import './GameBoard.css'

function GameBoard({
	cards,
	flippedCards,
	disabled,
	matchCards,
	handleClick,
}) {
	return (
		<div className='game-board'>
			{cards.map((card, index) => (
				<Card
					key={index}
					name={card.name}
					id={card.id}
					flippedCards={flippedCards.includes(index)}
					disabled={
						disabled ||
						matchCards.includes(index) ||
						flippedCards.includes(index)
					}
					matchCards={matchCards.includes(index)}
					handleClick={() => handleClick(index)}
				/>
			))}
		</div>
	)
}

export default GameBoard
