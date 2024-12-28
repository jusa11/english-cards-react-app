import { useContext } from 'react';
import WordContext from './Context/WordContext';

const Stats = () => {
  const { words, knownWords, remainingWords } = useContext(WordContext);
  return (
    <div className="stats">
      <p>
        Всего карточек: <span className="total-cards">{words.length}</span>
      </p>
      <p>
        Знаю: <span className="known-cards">{knownWords.length}</span>
      </p>
      <p>
        Осталось выучить:{' '}
        <span className="remaining-cards">{remainingWords.length}</span>
      </p>
    </div>
  );
};

export default Stats;
