import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess";
import GuessesHistory from "../GuessesHistory";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  function addGuessToHistory(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;
    setGuesses([...guesses, guess]);
  }

  function handleGameOver(status) {
    setGameStatus(status);
  }

  return (
    <>
      <GuessesHistory
        guesses={guesses}
        answer={answer}
        handleGameOver={handleGameOver}
      />
      <Guess
        addGuessToHistory={addGuessToHistory}
        guesses={guesses}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
