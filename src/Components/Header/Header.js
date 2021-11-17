import React from 'react';
import './Header.css';

const Header = ({ numberOfCards, restartGame }) => {
	return (
		<div className='header'>
			<h1 className='heading'>Memory Game</h1>
			{numberOfCards ? (
				<button
					className='restart-game-btn'
					onClick={restartGame}>
					Restart
				</button>
			) : null}
		</div>
	);
};

export default Header;
