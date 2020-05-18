import PropTypes from 'prop-types';
import style from './styled.module.css';
import * as images from '../../../data/set3/champions/tft3_champions.js';

export const Champions = ({ champions, onClickSelectionChampion, traitHover, onClickChangeActionUser}) => {

    const handleDragStart = (event) => {
        onClickChangeActionUser('add');
        onClickSelectionChampion(event.target.attributes.getNamedItem('data-champion').value);
    };
    
    return (
        <>
            {
                champions.map(champion => {

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
                                `${selectedTraitHover ? ` ${style[selectedTraitHover]}` : ''}`
                            }
                        >
                            <img
                                draggable={true}
                                onDragStart={e => handleDragStart(e)}
                                data-champion={champion.championId}
                                alt={champion.championId}
                                src={images[champion.championId.toLowerCase()]}
                                className={
                                    `${style.itemContent_image}` +
                                    ` ${style[`itemContent_imageBorderCost-0${champion.cost}`]}`
                                }
                            />
                            <p className={style.itemContent_txt}>
                                {champion.name}
                            </p>
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
    onClickSelectionChampion: PropTypes.func.isRequired,
    onClickChangeActionUser: PropTypes.func.isRequired,
    traitHover: PropTypes.string,
};