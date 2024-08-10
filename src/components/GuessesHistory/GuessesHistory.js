import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import LockedGuess from "../LockedGuess";

function GuessesHistory({ guesses, answer, handleGameOver }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <LockedGuess
            key={num}
            guess={guesses[num]}
            guesses={guesses}
            answer={answer}
            handleGameOver={handleGameOver}
          />
        ))}
      </div>
    </>
  );
}

export default GuessesHistory;
