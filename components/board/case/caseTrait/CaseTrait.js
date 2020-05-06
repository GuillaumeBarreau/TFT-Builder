import style from './CaseTrait.module.css';
import * as images from '../../../../data/set3/traits/tft3_traits.js';

export const CaseTrait = ({data}) => {
 
    return (
        <ul className={style.mainContent}>
            {
                data.traits.map(trait => {
                    
                    return (
                        <li className={style.mainContent_item} key={trait}>
                            <img 
                                className={style.mainContent_image} 
                                src={images[trait.toLowerCase()]}
                            />
                    </li>
                )})
            }
        </ul>
    );
};
