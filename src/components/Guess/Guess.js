import { on } from "process";
import React from "react";

function Guess({ addGuessToHistory, gameStatus, guesses }) {
  const [guess, setGuess] = React.useState("");

  function onGuessChange(string) {
    if (string.length > 5) {
      return;
    }
    setGuess(string.toUpperCase());
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log({
      guess,
    });
    addGuessToHistory(guess);
    setGuess("");
  }

  return (
    <>
      {gameStatus === "win" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === "lose" && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      )}
      {gameStatus === "playing" && (
        <form
          className="guess-input-wrapper"
          onSubmit={(event) => {
            onSubmit(event);
          }}
        >
          <label htmlFor="guess-input">Enter guess:</label>
          <input
            id="guess-input"
            type="text"
            value={guess}
            onChange={(event) => onGuessChange(event.target.value)}
            pattern="[A-Z]{5}"
            title="5 letter word"
          />
        </form>
      )}
    </>
  );
}

export default Guess;
