import PropTypes from 'prop-types';
import style from './styled.module.css';

export const Button = ({ onClick, children, color  }) => {
    return (
        <button
            className={
                `${style.mainContent}`+
                ` ${style[color]}`
            }
            onClick={onClick}
        >
            {
                children
            }
            <span className={style.mainContent_Border}></span>
        </button>

    )
};

Button.defaultProps = {
    color: 'primary',
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary', 'warn']),
    onClick: PropTypes.func.isRequired,
};