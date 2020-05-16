import style from './styled.module.css';
import { Board } from './Board';
import data from '../../data/set3/combineItems.json';

export const Items = () => {
  
  return (
    <div
      className={style.mainContent}
    >
      <Board data={data}></Board>
    </div>
  )
};
