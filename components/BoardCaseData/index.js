import style from './styled.module.css';
import * as images from '../../data/set3/champions/tft3_champions.js';

export const BoardCaseData = ({data}) => {
 
    return (
        <div className={style.mainContent}>
            {
                <img
                    className={style.mainContent_image}
                    alt={data.name}
                    src={images[data.championId.toLowerCase()]}
                />
            }
        </div>
    );
};
