import PropTypes from 'prop-types';
import style from './styled.module.css';
import { BoardCaseData } from '../BoardCaseData';
import { BoardCaseTrait } from '../BoardCaseTrait';
import { BoardCaseItem } from '../BoardCaseItem';

export const BoardCase = ({ id, data, onClickAddElement, onClickDeleteChampion, onClickDeleteItem, traitHover}) => {
    
    const selectedTraitHover = (traitHover !== null)
        ? (data.traits && (data.traits.indexOf(traitHover)) !== -1) ?
            'traitSelected' :
            'traitNotSelected'
        : null;

    return (
        <>
            <li className={style.mainContent} >
                <div
                    className={
                        `${style.mainContent_background}` +
                        `${Object.keys(data).length > 1 ? ` ${style[`mainContent_backgroundColorCost-0${data.cost}`]}` : ''}` +
                        `${selectedTraitHover ? ` ${style[selectedTraitHover]}` : ''}`
                    }
                ></div>
               <div
                    className={
                        `${style.mainContent_list}` 
                    }
                    id={id}
                    onClick={onClickAddElement}
                >
                    {
                        // eslint-disable-next-line no-prototype-builtins
                        data.hasOwnProperty('name') &&
                        <>
                            <BoardCaseTrait data={data} />
                            <BoardCaseData
                                data={data}
                                onClickDeleteChampion={onClickDeleteChampion}
                                id={id}
                            />
                            {
                                // eslint-disable-next-line no-prototype-builtins
                                data.hasOwnProperty('items') && (
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
    traitHover: PropTypes.string
};