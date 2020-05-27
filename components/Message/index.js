import PropTypes from 'prop-types';
import style from './styled.module.css';

export const Message = ({ alert, onClick }) => {
  return (
    <div
      className={style.mainContent}
    >
      <p>{alert.message}</p>
      <span
        onClick={() => onClick({})}
        className={style.mainContent_span} 
      >
        X
      </span>
    </div>
  )
};
