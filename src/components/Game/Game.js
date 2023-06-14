import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { GAME_STATUS } from '../../constants';
import { checkGuess, validateGameStatus } from '../../game-helpers';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleGuessSubmit = (newGuess) => {
    const validatedLetters = checkGuess(newGuess, answer);
    setGuesses([...guesses, { value: newGuess, validatedLetters }]);
  };

  const gameStatus = validateGameStatus(guesses, answer);

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm
        handleGuessSubmit={handleGuessSubmit}
        finished={gameStatus !== GAME_STATUS.Pending}
      />
      {gameStatus === GAME_STATUS.Won && (
        <WonBanner attempts={guesses.length} />
      )}
      {gameStatus === GAME_STATUS.Lost && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
