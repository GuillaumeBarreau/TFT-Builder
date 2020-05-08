import style from './styled.module.css';
import * as images from '../../data/set3/items/tft3_items.js';

export const Items = ({ items, itemSelect, onClickSelectionItem }) => {
    
    return (
        <ul 
            className={style.mainContent}
         >
            {
                items.map(item => {
                    let selectedItem = (itemSelect === item.id) ?  'selected' : null;
                    
                    return (
                        <li
                            key={item.id}
                            id={item.id}
                            className={
                                `${style.itemContent}` +
                                `${selectedItem ? ` ${style.itemSelected}` : ''}`
                            }
                            onClick={onClickSelectionItem}
                        >

                            <img
                                alt={item.name}
                                src={images[item.id.toLowerCase()]}
                                className={style.itemContent_image}
                            />
                            <p className={style.itemContent_txt}>{item.name} </p>
                        </li>
                    )
                })
            }
        </ul>
    )
};
