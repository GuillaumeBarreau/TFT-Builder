import PropTypes from 'prop-types';
import style from './styled.module.css';

export const Switch = ({ onClick}) => {

    return (
        <div className={style.mainContent}>
            <input className={style.mainContent_checkbox} id={`switch`} type="checkbox" onClick={onClick}/>
            <label className={style.mainContent_label} htmlFor={`switch`} >
                <span className={style.mainContent_label_span} />
            </label>
        </div>
    );
};

