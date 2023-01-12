import EndButton from "../EndButton";
import "./GameOver.css";

const GameOver = ({exitGame}) => {
  return (
    <div>
      <div className="gameover">
        <h1>Game Over</h1>
        <EndButton exitGame={exitGame} name="Sair"/>
      </div>
    </div>
  );
};

export default GameOver;
