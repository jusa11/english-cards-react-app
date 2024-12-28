import { useContext, useState } from 'react';
import WordContext from './Context/WordContext';
import Buttons from './UI/Buttons';
import RestartButton from './UI/RestartButton';

const WordCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const { currentWord, remainingWords } = useContext(WordContext);

  return (
    <div>
      <div className="cards-container">
        <div className={`card`}>
          <div className="word" onClick={handleCardClick}>
            {remainingWords.length > 0
              ? isFlipped
                ? currentWord.rus
                : currentWord.eng || 'Loading...'
              : 'Все карточки выучены'}
          </div>

          {remainingWords.length > 0 ? <Buttons /> : <RestartButton />}
        </div>
      </div>
    </div>
  );
};

export default WordCard;
