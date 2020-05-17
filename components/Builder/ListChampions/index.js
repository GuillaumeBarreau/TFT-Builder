import PropTypes from 'prop-types';
import style from './styled.module.css';
import * as images from '../../../data/set3/champions/tft3_champions.js';

export const Champions = ({ champions, championSelect, onClickSelectionChampion, traitHover }) => {

    return (
        <>
            {
                champions.map(champion => {
                    const selectedItem = (championSelect === champion.championId) ? true : false;

                    const selectedTraitHover = (traitHover !== null)
                        ? (champion.traits.indexOf(traitHover)) !== -1 ?
                            'traitSelected' :
                            'traitNotSelected'
                        : null;

                    return (
                        <li
                            key={champion.championId}
                            id={champion.championId}
                            className={
                                `${style.itemContent}` +
                                `${selectedItem ? ` ${style.championSelected}` : ''}` +
                                `${selectedTraitHover ? ` ${style[selectedTraitHover]}` : ''}`
                            }
                            onClick={(e) => onClickSelectionChampion(e.target.id)}
                        >
                            <img
                                alt={champion.championId}
                                src={images[champion.championId.toLowerCase()]}
                                className={
                                    `${style.itemContent_image}` +
                                    ` ${style[`itemContent_imageBorderCost-0${champion.cost}`]}`
                                }
                            />
                            <p className={style.itemContent_txt}>{champion.name} </p>
                        </li>
                    )
                })
            }
        </>
    )
};

Champions.defaultProps = {
    traitHover: null,
};

Champions.propTypes = {
    champions: PropTypes.arrayOf(
        PropTypes.shape({
            championId: PropTypes.string,
            cost: PropTypes.number,
            name: PropTypes.string,
            traits: PropTypes.arrayOf(PropTypes.string)
        })
    ).isRequired, 
    championSelect: PropTypes.string.isRequired,
    onClickSelectionChampion: PropTypes.func.isRequired,
    traitHover: PropTypes.string,
};