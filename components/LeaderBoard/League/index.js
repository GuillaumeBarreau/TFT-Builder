import style from './styled.module.css';
import PropTypes from 'prop-types';

export const League = ({ dataLeague }) => {
  return (
    <div className={style.mainContent}>{dataLeague}</div>
  )
};

League.defaultProps = {
  dataLeague: "string"
};

League.propTypes = {
  dataLeague: PropTypes.string.isRequired
};


