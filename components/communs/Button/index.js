import PropTypes from 'prop-types';
import style from './styled.module.css';

export const Button = ({ onClick, children, color, ...props }) => {
    return (
        <button
            className={
                `${style.mainContent}` +
                ` ${style[color]}`
            }
            onClick={onClick}
            {...props}
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
    onClick: null
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary', 'warn', 'green']),
    onClick: PropTypes.func,
};