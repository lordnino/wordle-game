import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function LockedGuess({ guess, answer, handleGameOver, guesses }) {
  const result = checkGuess(guess, answer);
  if (guess === answer) {
    handleGameOver("win");
  } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
    handleGameOver("lose");
  }

  return (
    <>
      <div className="guess">
        {range(5).map((num) => {
          return (
            <Cell
              key={num}
              letter={result ? result[num].letter : undefined}
              status={result ? result[num].status : undefined}
            />
          );
        })}
      </div>
    </>
  );
}

export default LockedGuess;
