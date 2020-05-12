import PropTypes from 'prop-types';
import style from './styled.module.css';

export const Button = ({ onClick, children  }) => {
    return (
        <button
            className={style.mainContent}
            onClick={onClick}
        >
            {
                children
            }
            <span className={style.mainContent_Border}></span>
        </button>

    )
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};