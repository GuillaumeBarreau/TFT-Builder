import PropTypes from 'prop-types';
import style from './styled.module.css';
import { BoardCaseData } from '../BoardCaseData';
import { BoardCaseTrait } from '../BoardCaseTrait';
import { BoardCaseItem } from '../BoardCaseItem';

export const BoardCase = ({ id, data, onClickMoveChampion, onClickSetMoveTargetId, onClickAddElement, onClickDeleteChampion, onClickDeleteItem, traitHover, onClickChangeActionUser, actionUser}) => {

    const selectedTraitHover = (traitHover !== null)
        ? (data.traits && (data.traits.indexOf(traitHover)) !== -1) ?
            'traitSelected' :
            'traitNotSelected'
        : null;

    const handleDragStart = (event) => {
        event.stopPropagation();
        onClickChangeActionUser('move');
        onClickSetMoveTargetId(event.currentTarget.id);
    };

    const handleDrop = (event) => {
        (actionUser === 'move') ? onClickMoveChampion(event.currentTarget.id) : onClickAddElement(event)
    }

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <li className={style.mainContent} >
                <div
                    className={
                        `${style.mainContent_background}` +
                        `${Object.keys(data).length >= 1 ? ` ${style[`mainContent_backgroundColorCost-0${data.cost}`]}` : ''}` +
                        `${selectedTraitHover ? ` ${style[selectedTraitHover]}` : ''}`
                    }
                ></div>
               <div
                    className={
                        `${style.mainContent_list}` 
                    }
                    id={id}
                    draggable={Object.prototype.hasOwnProperty.call(data, 'name') ? true : false}
                    onDragStart={e => handleDragStart(e)}
                    onDragOver={e => handleDragOver(e)}
                    onDrop={e => handleDrop(e)}
                >
                    {
                        Object.prototype.hasOwnProperty.call(data, 'name') &&
                        <>
                            <BoardCaseTrait data={data} />
                            <BoardCaseData
                                data={data}
                                onClickDeleteChampion={onClickDeleteChampion}
                                id={id}
                            />
                            {
                                Object.prototype.hasOwnProperty.call(data, 'items') && (
                                    <BoardCaseItem 
                                        items={data.items}
                                        onClickDeleteItem={onClickDeleteItem}
                                        id={id}
                                    />
                                )
                            }
                            
                        </>
                    }
                </div>
            </li>
        </>
    );
};

BoardCase.defaultProps = {
    traitHover: null,
};

BoardCase.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    onClickAddElement: PropTypes.func.isRequired,
    onClickDeleteChampion: PropTypes.func.isRequired,
    onClickDeleteItem: PropTypes.func.isRequired,
    onClickMoveChampion: PropTypes.func.isRequired,
    onClickSetMoveTargetId: PropTypes.func.isRequired,
    onClickSelectionChampion: PropTypes.func.isRequired,
    onClickChangeActionUser: PropTypes.func.isRequired,
    actionUser: PropTypes.string,
    traitHover: PropTypes.string
};