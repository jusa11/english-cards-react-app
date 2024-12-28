import { useContext } from 'react';
import WordContext from '../Context/WordContext';

const RestartButton = () => {
  const { handlRestart } = useContext(WordContext);
  return (
    <button className="restart-btn" onClick={handlRestart}>
      Начать сначала
    </button>
  );
};

export default RestartButton;
