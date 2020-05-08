import style from './styled.module.css';
import * as images from '../../data/set3/champions/tft3_champions.js';

export const BoardCaseData = ({ data, onClickDeleteChampion, id }) => {
    
    return (
        <>
            <div className={style.mainContent}>
                {
                    <img
                        className={style.mainContent_image}
                        alt={data.name}
                        src={images[data.championId.toLowerCase()]}
                    />
                }
            </div>
            <button
                onClick={(e) => onClickDeleteChampion(e, data.championId)}
                className={style.spanContent}
                id={`button-${id}`}
            >
                <p>🗑️</p>
            </button>
        </>
    );
};
