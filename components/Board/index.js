import { BoardLane } from '../BoardLane';
import { BoardCase } from '../BoardCase';
import style from './styled.module.css';

export const Board = ({ board, onClickAddChampion, onClickDeleteChampion, traitHover }) => {

    return (
        <div 
            className={style.mainContent}
        >
            {
                board.map((lane, i) =>
                    <BoardLane 
                        key={i}
                    >
                        {
                            lane.map((data, j) =>
                                <BoardCase 
                                    id={`case__${i}__${j}`}
                                    key={j} 
                                    data={data}
                                    onClickAddChampion={onClickAddChampion}
                                    onClickDeleteChampion={onClickDeleteChampion}
                                    traitHover={traitHover}
                                />
                            )
                        }
                    </BoardLane>
                )
            }
        </div>
    )
};
