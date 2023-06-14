import React from 'react';

function GuessForm({ handleGuessSubmit, finished }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleInputChange = (event) => {
    setTentativeGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleGuessSubmit(tentativeGuess);
    setTentativeGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength="5"
        maxLength="5"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        className="guess-input"
        value={tentativeGuess}
        onChange={handleInputChange}
        disabled={finished}
      />
    </form>
  );
}

export default GuessForm;
