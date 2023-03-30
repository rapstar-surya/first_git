import React, { useState } from 'react';

function GuessLuckyNumber() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleGuess = (event) => {
    event.preventDefault();
    setCount(count + 1);

    if (guess < luckyNumber) {
      alert(`You guessed a smaller number`);
    } else if (guess > luckyNumber) {
      alert(`You guessed a bigger number`);
    } else {
      setMessage(`Congratulations! You guessed the right number in ${count} attempts`);
    }
    setGuess('');
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Guess Lucky Number Game</h1>
      <p>Guess a number between 1 and 100:</p>
      <form onSubmit={handleGuess}>
        <input type="number" placeholder='Guess lucky number ...' value={guess} onChange={(event) => setGuess(event.target.value)} />
        <button type="submit">Match Number</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default GuessLuckyNumber;

// https://github.com/rapstar-surya/first_git/tree/navbar