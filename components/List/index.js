
import PropTypes from 'prop-types';
import style from './styled.module.css';

export const List = ({ children }) => {
    
    return (
        <ul 
            className={style.mainContent}
         >
           {children}
        </ul>
    )
};

List.propTypes = {
    children: PropTypes.node.isRequired,
};