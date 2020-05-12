import PropTypes from 'prop-types';
import style from './styled.module.css';
import * as images from '../../data/set3/items/tft3_items.js';

export const Items = ({ items, itemSelect, onClickSelectionItem }) => {
    
    return (
        <>
            {
                items.map(item => {
                    const selectedItem = (itemSelect === item.id) ?  true : false;
                    
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
                                src={images[item.id]}
                                className={style.itemContent_image}
                            />
                            {/* <p className={style.itemContent_txt}>{item.name} </p> */}
                        </li>
                    )
                })
            }
        </>
    )
};

Items.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string
        })).isRequired,
    itemSelect: PropTypes.string.isRequired,
    onClickSelectionItem: PropTypes.func.isRequired,
};