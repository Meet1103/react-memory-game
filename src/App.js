import React, { useState, useEffect } from 'react';
import generatingRandomCards from './Components/GameData/GameData';
import Header from './Components/Header/Header';
import GameBoard from './Components/GameBoard/GameBoard';
import ResultPage from './Components/ResultPage/ResultPage';
import DifficultyLevel from './Components/DifficultyLevel/DifficultyLevel';
import './App.css';

const App = () => {
	// Store cards data into cards array
	const [cards, setCards] = useState([]);

	// Sets number of cards as per difficulty level choosen by user
	const [numberOfCards, setNumberOfCards] = useState(0);

	// Store flip cards index into flippedCards array
	const [flippedCards, setFlippedCards] = useState([]);

	// Disable the card to flip
	const [disabled, setDisabled] = useState(false);

	// Store match cards index into matchCards array
	const [matchCards, setMatchCards] = useState([]);

	// Store steps user have taken to finish the game
	const [steps, setSteps] = useState(0);

	// Show GameBoard if result is false else its shows ResultPage
	const [result, setResult] = useState(false);

	// Store game's data to cards array when user selects difficulty level
	useEffect(() => {
		setCards(generatingRandomCards(numberOfCards));
	}, [numberOfCards]);

	// Run everytime when matchCards values changes
	useEffect(() => {
		if (
			cards.length > 0 &&
			matchCards.length === numberOfCards * 2
		) {
			setTimeout(() => setResult(true), 1000);
		}
	}, [matchCards]);

	// Sets the numbers of cards to display as per difficulty level choosen by user
	const onHandleClick = (value) => {
		setNumberOfCards(value);
	};

	// Restarts Memory Game
	const restartGame = () => {
		setCards([]);
		setNumberOfCards(0);
		setFlippedCards([]);
		setMatchCards([]);
		setSteps(0);
		setDisabled(false);
		setResult(false);
	};

	// Checks if the clicked card is same as before clicked card or not
	const sameClickedCard = (id) => {
		return flippedCards.includes(id);
	};

	// Checks if clicked card matches with the first one or not
	const isMatch = (id) => {
		const firstCard = cards[flippedCards[0]].name;
		const secondCard = cards[id].name;
		return firstCard === secondCard;
	};

	// Removes card indexes from flippedCard array and set disabled to false
	const resetCards = () => {
		setFlippedCards([]);
		setDisabled(false);
	};

	// Runs everytime a card is clicked
	const handleClick = (id) => {
		// Incrementing step value everytime user clicks on the card
		setSteps((steps) => steps + 1);

		// Sets disable to true every time a card is clicked
		setDisabled(true);

		// Checks if the card clicked is the first one or not
		if (flippedCards.length === 0) {
			// Store index of first clicked card into flippedCard array and sets disable value to false
			setFlippedCards([id]);
			setDisabled(false);
		}

		// Checks if the clicked card is same as before clicked card or not
		else if (sameClickedCard(id)) {
			setDisabled(false);
			return;
		} else {
			// Store index of second clicked card into flippedCard array
			setFlippedCards([...flippedCards, id]);

			if (isMatch(id)) {
				// Store indexes of matched card into matchCard array
				setMatchCards([...matchCards, flippedCards[0], id]);
				resetCards();
			} else {
				setTimeout(() => resetCards(), 1500);
			}
		}
	};

	return (
		<div className='App'>
			<Header
				numberOfCards={numberOfCards}
				restartGame={restartGame}
			/>
			{!numberOfCards ? (
				<DifficultyLevel onHandleClick={onHandleClick} />
			) : !result ? (
				<GameBoard
					cards={cards}
					flippedCards={flippedCards}
					disabled={disabled}
					matchCards={matchCards}
					handleClick={handleClick}
				/>
			) : (
				<ResultPage steps={steps} />
			)}
		</div>
	);
};

export default App;
