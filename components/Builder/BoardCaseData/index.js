import PropTypes from 'prop-types';
import style from './styled.module.css';
import IconDelete from '../../../assets/icons/icon-delete';

export const BoardCaseData = ({ data, onClickDeleteChampion, id, imagesChampions }) => {

    return (
        <>
            <div className={style.mainContent}>
                {
                    <img
                        className={style.mainContent_image}
                        alt={data.name}
                        data-champion={data.championId}
                        src={imagesChampions[data.championId.toLowerCase()]}
                    />
                }
            </div>
            <button
                onClick={(e) => onClickDeleteChampion(e, e.currentTarget.id)}
                className={style.spanContent}
                id={`button-${id}`}
            >
                <IconDelete color='#952a2a'></IconDelete>
            </button>
        </>
    );
};

BoardCaseData.propTypes = {
    id: PropTypes.string.isRequired,
    imagesChampions: PropTypes.object.isRequired,
    data: PropTypes.shape({
        championId: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    onClickDeleteChampion: PropTypes.func.isRequired,
};