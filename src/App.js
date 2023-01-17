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
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetter] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordandCategory = () => {
    //select a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    //select a random word from the sorted category
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    //return the sorted data
    return { word, category };
  };

  const startGame = () => {
    const { word, category } = pickWordandCategory();
    console.log(word, category);

    //split word into letters
    let wordLetter = word.split("");

    //normalize to lower case
    wordLetter = wordLetter.map((l) => l.toLowerCase());
    console.log(wordLetter);

    setPickedWord(word);
    setPickedCategory(category);
    setLetter(wordLetter);

    setGameStage(stages[1].name);
  };

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    //check if letter has alredy been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a chance
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
    }
  };

  console.log("cert",guessedLetters)
  console.log("errado",wrongLetters)

  const exitGame = () => {
    setGameStage(stages[2].name);
  };

  return (
    <div className="App">
      <div>
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && (
          <GameScreen
            exitGame={exitGame}
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />
        )}
        {gameStage === "end" && <GameOver exitGame={exitGame} />}
      </div>
    </div>
  );
}

export default App;
