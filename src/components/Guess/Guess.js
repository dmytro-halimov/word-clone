import React from 'react';
import { range } from '../../utils';

const NUM_OF_LETTERS = 5;

function Guess({ value = '', validatedLetters }) {
  const letters = range(0, NUM_OF_LETTERS);

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span
          className={`cell ${
            validatedLetters ? validatedLetters[index].status : ''
          }`}
          key={index}
        >
          {value[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
