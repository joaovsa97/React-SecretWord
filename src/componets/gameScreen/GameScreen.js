import EndButton from "../EndButton";
import "./GameScreen.css";

const GameScreen = ({exitGame}) => {
  return (
    <div>
      <h1>GameScreen</h1>
      <EndButton exitGame={exitGame}/>
    </div>
  );
};

export default GameScreen;
