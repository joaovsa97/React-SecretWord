import { useState, useRef } from "react";
import EndButton from "../EndButton";
import "./GameScreen.css";

const GameScreen = ({
  exitGame,
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    verifyLetter(letter)

    setLetter("")

    letterInputRef.current.focus()
  }
  return (
    <div className="GameScreen">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h2>Advinhe a Palavra</h2>
      <p className="tip">
        Dica: <span>{pickedCategory}</span>
      </p>
      <p>Você ainda tem {guesses} tentativa(s)</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input
            className="confLetter"
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Confirmar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter},</span>
        ))}
      </div>
      <div className="buttons">
        <button onClick={verifyLetter}>Finalizar jogo</button>
        <EndButton exitGame={exitGame} name="Desistir" />
      </div>
    </div>
  );
};

export default GameScreen;
