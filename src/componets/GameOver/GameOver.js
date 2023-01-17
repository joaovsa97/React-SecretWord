import EndButton from "../EndButton";
import "./GameOver.css";

const GameOver = ({exitGame , score}) => {
  return (
    <div>
      <div className="gameover">
        <h1>Game Over</h1>
        <h3>Você fez <span>{score}</span> pontos</h3>
        <EndButton exitGame={exitGame} name="Sair"/>
      </div>
    </div>
  );
};

export default GameOver;
