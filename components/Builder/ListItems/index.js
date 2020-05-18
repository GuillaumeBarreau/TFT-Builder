import PropTypes from 'prop-types';
import style from './styled.module.css';
import * as images from '../../../data/set3/items/tft3_items.js';

export const Items = ({ items, onClickSelectionItem, onClickChangeActionUser }) => {
    
    const handleDragStart = (event) => {
        onClickChangeActionUser('add');
        onClickSelectionItem(event.target.attributes.getNamedItem('data-item').value);
    };

    return (
        <>
            {
                items.map(item => {
                    
                    return (
                        <li
                            key={item.id}
                            id={item.id}
                            className={
                                style.itemContent
                            }
                        >
                            <img
                                draggable={true}
                                onDragStart={e => handleDragStart(e)}
                                data-item={item.id}
                                alt={item.name}
                                src={images[item.id]}
                                className={style.itemContent_image}
                            />
                            <p className={style.itemContent_txt}>{item.name}</p>
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
    onClickSelectionItem: PropTypes.func.isRequired,
    onClickChangeActionUser: PropTypes.func.isRequired
};