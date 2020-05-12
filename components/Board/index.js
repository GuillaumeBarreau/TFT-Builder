import { BoardLane } from '../BoardLane';
import { BoardCase } from '../BoardCase';
import style from './styled.module.css';

export const Board = ({ board, onClickAddElement, onClickDeleteChampion, onClickDeleteItem,  traitHover }) => {

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
                                    onClickAddElement={onClickAddElement}
                                    onClickDeleteChampion={onClickDeleteChampion}
                                    onClickDeleteItem={onClickDeleteItem}
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
