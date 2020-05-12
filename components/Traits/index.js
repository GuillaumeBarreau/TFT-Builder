import PropTypes from 'prop-types';
import style from './styled.module.css';
import * as images from '../../data/set3/traits/tft3_traits.js';

export const Traits = ({ traits, onClickSelectionTrait, onClickResetTraits, selectedTraits, onMouseEnterSelectionTrait, onMouseLeaveSelectionTrait  }) => {

    return (
        <ul className={style.mainContent}>
            {
                traits.map(trait => (
                    <li
                        className={
                            `${style.mainContent_item}` +
                            `${selectedTraits.indexOf(trait.key) !== -1 ? ` ${style.mainContent_itemSlected}` : ''}`
                        }
                        key={trait.key}
                        onMouseEnter={() => onMouseEnterSelectionTrait(trait.key)}
                        onMouseLeave={() => onMouseLeaveSelectionTrait(trait.key)}
                    >
                        <button
                            className={style.mainContent_itemButton}
                            onClick={() => onClickSelectionTrait(trait.key)}
                        >

                            <img
                                alt={trait.name}
                                className={style.mainContent_image}
                                src={images[trait.key.toLowerCase()]}
                            />
                            <p className={style.mainContent_txt}>
                                {
                                    trait.name
                                }
                            </p>
                        </button>
                    </li>
                ))
            }
            <li 
                className={
                    `${style.mainContent_item} ${style.mainContent_itemReset}`
                }
                onClick={onClickResetTraits}
            >
                Reset
            </li>
        </ul>
    )
};

Traits.propTypes = {
    traits: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string,
            key: PropTypes.string,
            name: PropTypes.string,
            sets: PropTypes.arrayOf(
                PropTypes.shape({
                    max: PropTypes.number,
                    min: PropTypes.number,
                    style: PropTypes.string
                })
            ),
            type: PropTypes.string,
        })
    ).isRequired,
    onClickSelectionTrait: PropTypes.func.isRequired,
    onClickResetTraits: PropTypes.func.isRequired,
    selectedTraits: PropTypes.arrayOf(PropTypes.string).isRequired,
    onMouseEnterSelectionTrait: PropTypes.func.isRequired,
    onMouseLeaveSelectionTrait: PropTypes.func.isRequired,
};