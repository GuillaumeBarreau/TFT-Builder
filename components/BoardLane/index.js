import PropTypes from 'prop-types';
import style from './styled.module.css';

export const BoardLane = ({ children }) => (
    <ul 
        className={style.mainContent}
    >
        {children}
    </ul>
);

BoardLane.propTypes = {
    children: PropTypes.node.isRequired
}