import { useContext } from 'react';
import WordContext from '../Context/WordContext';

const Buttons = () => {
  const { markAsKnown, getRandomWord } = useContext(WordContext);
  return (
    <div className="buttons">
      <button className="button know" onClick={markAsKnown}>
        Знаю
      </button>
      <button className="button dont-know" onClick={getRandomWord}>
        Не знаю
      </button>
    </div>
  );
};

export default Buttons;
