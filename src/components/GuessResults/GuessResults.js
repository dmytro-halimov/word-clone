import React from 'react';
import Guess from '../Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ guesses }) {
  const guessTries = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {guessTries.map((number, index) => (
        <Guess
          key={index}
          value={guesses[index]?.value}
          validatedLetters={guesses[index]?.validatedLetters}
        />
      ))}
    </div>
  );
}

export default GuessResults;
