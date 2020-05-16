import { BoardLane } from '../BoardLane';
import { BoardCase } from '../BoardCase';
import style from './styled.module.css';
import PropTypes from 'prop-types';

export const Board = ({ board, ...props }) => {
    return (
        <div className={style.mainContent}>
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
                                    {...props}
                                />
                            )
                        }
                    </BoardLane>
                )
            }
        </div>
    )
};

Board.propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
};