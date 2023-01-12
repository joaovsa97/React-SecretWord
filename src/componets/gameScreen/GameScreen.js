import EndButton from "../EndButton";
import "./GameScreen.css";

const GameScreen = ({ exitGame, verifyLetter }) => {
  return (
    <div className="GameScreen">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h2>Advinhe a Palavra</h2>
      <p className="tip">
        Dica: <span>dica...</span>
      </p>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra</p>
        <form>
          <input className="confLetter" type="text" name="letter" maxLength="1" required />
          <button>Confirmar</button>
        </form>
      </div>
      <div className="buttons">
        <button onClick={verifyLetter}>Finalizar jogo</button>
        <EndButton exitGame={exitGame} name="Desistir" />
      </div>
    </div>
  );
};

export default GameScreen;
