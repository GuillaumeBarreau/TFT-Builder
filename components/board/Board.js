import { Lane } from './lane/Lane';
import { Case } from './case/Case';

import { array } from 'prop-types';
import style from './Board.module.css';

export const Board = ({ board, ...props }) => {

    return (
        <div 
            className={style.mainContent}
        >
            {
                board.map((lane, i) =>
                    <Lane 
                        key={i}
                    >
                        {
                            lane.map((data, j) =>
                                <Case 
                                    id={`case__${i}__${j}`}
                                    key={j} 
                                    data={data}
                                    {...props}
                                >
                                </Case>
                            )
                        }
                    </Lane>
                )
            }
        </div>
    )
};

// Board.propTypes = {
//     board: array,
// };

// Board.defaultProps = {
//     board: [
//         [{}, {}, {}, {}, {}, {}, {}],
//         [{}, {}, {}, {}, {}, {}, {}],
//         [{}, {}, {}, {}, {}, {}, {}],
//         [{}, {}, {}, {}, {}, {}, {}]
//     ]
// };