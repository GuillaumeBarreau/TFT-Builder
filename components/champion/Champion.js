import style from './Champion.module.css';
import * as images from '../../data/set3/champions/tft3_champions.js';

export const Champion = ({ champions, championSelect, ...props }) => {
    
    return (
        <ul 
            className={style.mainContent}
         >
            {
                champions.map(champion => {
                    let selectedItem = (championSelect === champion.championId) ?  'selected' : null;
                    
                    return (
                        <li 
                            key={champion.championId} 
                            id={champion.championId} 
                            className={
                                `${style.itemContent}`+
                                `${selectedItem ? ` ${style.championSelected}` : ''}`
                            }
                            {...props}
                        >
                            
                            <img 
                                alt={champion.championId} 
                                src={images[champion.championId.toLowerCase()]}
                                className={
                                    `${style.itemContent_image}` +
                                    ` ${style[`itemContent_imageBorderCost-0${ champion.cost }`]}`
                                }
                            />
                            <p className={style.itemContent_txt}>{champion.name} </p>
                        </li>
                    )
                })
            }
        </ul>
    )
};
