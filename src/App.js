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
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetter] = useState([])

  const pickWordandCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word, category}
  }

  const startGame = () => {
    
    const {word, category} = pickWordandCategory()
    console.log(word,category)

    let wordLetter = word.split("")

    wordLetter = wordLetter.map((l) => l.toLowerCase())
    console.log(wordLetter)
    
    setPickedWord(word)
    setPickedCategory(category)
    setLetter(letters)

    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const exitGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      <div>
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && <GameScreen exitGame={exitGame} verifyLetter={verifyLetter}/>}
        {gameStage === 'end' && <GameOver exitGame={exitGame}/>}
      </div>
    </div>
  );
}

export default App;
