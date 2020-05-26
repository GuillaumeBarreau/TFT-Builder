import PropTypes from 'prop-types';
import style from './styled.module.css';

export const BoardCaseTrait = ({ data, imagesTraits }) => {
        
    return (
        <ul 
            className={
                `${style.mainContent}` +
                `${data.traits.length > 3 ? ` ${style.reverse}` : ''}`
            }
        >
            {
                data.traits.map(trait => {
                    
                    return (
                        <li className={style.mainContent_item} key={trait}>
                            <img 
                                className={style.mainContent_image} 
                                src={imagesTraits[trait.toLowerCase()]}
                            />
                        </li>
                    )
                })
            }
        </ul>
    );
};

BoardCaseTrait.propTypes = {
    imagesTraits: PropTypes.object.isRequired,
    data: PropTypes.shape({
        traits: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
};