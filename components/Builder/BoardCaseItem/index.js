import PropTypes from 'prop-types';
import style from './styled.module.css';
import IconDelete from '../../../assets/icons/icon-delete.js';

export const BoardCaseItem = ({ items, onClickDeleteItem, id, imagesItems }) => {

    return (
        <ul className={style.mainContent}>
            {
                items.map((item, index) => {

                    return (
                        <li
                            className={style.mainContent_item}
                            key={`${item}_${index}`}
                            onClick={(e) => onClickDeleteItem(e, item)}
                            id={`buttonItem-${id}__${index}`}
                        >
                            <img
                                className={style.mainContent_image}
                                src={imagesItems[item]}
                            />
                            <IconDelete color='#c1709f' />
                        </li>
                    )
                })
            }
        </ul>
    );
};

BoardCaseItem.propTypes = {
    id: PropTypes.string.isRequired,
    imagesItems: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickDeleteItem: PropTypes.func.isRequired
};