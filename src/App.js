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

const GuessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetter] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(GuessesQty);
  const [score, setScore] = useState(0);

  const pickWordandCategory = useCallback(() => {
    //select a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //select a random word from the sorted category
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    //return the sorted data
    return { word, category };
  }, [words]);

  const startGame = useCallback(() => {
    //clear all letters
    clearLetterStates();

    //picking word and category
    const { word, category } = pickWordandCategory();

    //split word into letters
    let wordLetter = word.split("");

    //normalize to lower case
    wordLetter = wordLetter.map((l) => l.toLowerCase());
    console.log(wordLetter);

    setGuesses(GuessesQty);
    setPickedWord(word);
    setPickedCategory(category);
    setLetter(wordLetter);

    setGameStage(stages[1].name);
  }, [pickWordandCategory]);

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
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  //check if guesses ended(lose)
  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    //win condition
    if (guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => (actualScore += 100));

      //reset game
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  const exitGame = () => {
    setGameStage(stages[0].name);

    setScore(0);
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
        {gameStage === "end" && <GameOver exitGame={exitGame} score={score} />}
      </div>
    </div>
  );
}

export default App;
