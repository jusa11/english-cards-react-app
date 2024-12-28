import { useCallback, useEffect, useState } from 'react';
import Stats from './Components/Stats';
import WordCard from './Components/WordCard';
import WordContext from './Components/Context/WordContext';
import words from './data/words';
import './App.css';

function App() {
  const [currentWord, setCurrentWord] = useState('');
  const [remainingWords, setRemainingWords] = useState(words);
  const [knownWords, setKnownWords] = useState([]);

  const getRandomWord = useCallback(() => {
    if (remainingWords.length > 0) {
      const randomWord =
        remainingWords[Math.floor(Math.random() * remainingWords.length)];
      setCurrentWord(randomWord);
    }
  }, [remainingWords]);

  useEffect(() => {
    getRandomWord();
  }, [getRandomWord]);

  const markAsKnown = () => {
    if (currentWord) {
      setKnownWords((prevKnownWords) => [...prevKnownWords, currentWord]);
      setRemainingWords(
        remainingWords.filter((word) => word.id !== currentWord.id)
      );
      getRandomWord();
    }
  };

  const handlRestart = () => {
    setKnownWords([]);
    setRemainingWords(words);
    getRandomWord();
  };

  return (
    <WordContext.Provider
      value={{
        currentWord,
        markAsKnown,
        getRandomWord,
        remainingWords,
        words,
        knownWords,
        handlRestart,
      }}
    >
      <div className="App">
        <section>
          <div className="container">
            <header>
              <h1 className="title">Карточки английского</h1>
            </header>
            <main>
              <Stats />
              <WordCard className="card" />
            </main>
          </div>
        </section>
      </div>
    </WordContext.Provider>
  );
}

export default App;
