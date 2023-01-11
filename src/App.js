//Css
import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//Data
import { wordsList } from "./data/word";

//Components
import StartScreen from "./componets/startPage/StartScreen";
import GameScreen from "./componets/gameScreen/GameScreen";
import GameOver from "./componets/GameOver/GameOver";

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const[words] = useState(wordsList)

  const startGame = () => {
    setGameStage(stages[1].name)
  }

  const exitGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      <div>
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && <GameScreen />}
        {gameStage === 'end' && <GameOver />}
      </div>
    </div>
  );
}

export default App;
