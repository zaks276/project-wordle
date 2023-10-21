import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTentativeGuess("");
    handleSubmitGuess(tentativeGuess);
  }
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id=
        "guess-input"
        disabled={gameStatus !== "running"}
        type="text"
        value={tentativeGuess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-z]{5}"
        title="5 letter word"
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}
export default GuessInput;
