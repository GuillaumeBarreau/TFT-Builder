import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useRouter } from 'next/router'

import style from './styled.module.css';

import { Board } from '../Board';
import { Champion } from '../Champion';
import { Traits } from '../Traits';
import { Synergies } from '../Synergies';
import { Button } from '../communs/Button';

import { RESET_TRAITS_ACTION, SORT_CHAMPIONS_ACTION, ADD_CHAMPION_ACTION, DELETE_CHAMPION_ACTION } from '../../store/actions/builder';
import { addOrDeleteTrait } from '../../logic/traits.logic';
import { renderSynergies } from '../../logic/synergies.logic';
import { countChampion } from '../../logic/champion.logic';
import { convertBoardToUrl, convertUrlToObject } from '../../logic/convertBoardToUrl.logic';

export const Builder = ({ dispatch, champions, championsFilter, traits, board }) => {

    const router = useRouter();
    const [championSelect, setChampionSelect] = useState('');
    const [menuTraitsDisplay, setMenuTraitsDisplay] = useState(false);
    const [selectedTraits, setSelectedTraits] = useState([]);
    
    if (router.query.deck) {
        const initBoard = convertUrlToObject(router.query.deck);
        if (board != initBoard) {
            board = initBoard;
        }
    }

    const setCopyUrl = () => {
        const query = convertBoardToUrl(board);
        return navigator.clipboard.writeText(`${location.protocol}${location.host}/?deck=${query}`)
    }

    const onClickSelectionChampion = (e) => {
        setChampionSelect(e.target.id)
    };

    const onClickResetTraits = () => {
        dispatch(RESET_TRAITS_ACTION());
        setSelectedTraits([]);
    };

    const onClickSelectionTrait = (value) => {
        const traits = addOrDeleteTrait(selectedTraits, value);
        dispatch(SORT_CHAMPIONS_ACTION(traits));
        setSelectedTraits(traits);
    };

    const onClickAddChampion = (event) => {
        event.preventDefault();
        if (!championSelect) return;
        if (countChampion(board) >= 15) return;
        dispatch(ADD_CHAMPION_ACTION(event.currentTarget, championSelect))
    };

    const onClickDeleteChampion = (event, championId) => {
        event.stopPropagation();
        dispatch(DELETE_CHAMPION_ACTION(event.currentTarget))
    };

    const synergies = renderSynergies(champions, traits, board);

    return (
        <div className={style.mainContent}>
            <div className={style.mainContent_board}>
                <Board
                    onClickAddChampion={onClickAddChampion}
                    onClickDeleteChampion={onClickDeleteChampion}
                    board={board}
                />
                {
                    Object.keys(synergies).length > 0 && (
                        <Synergies synergies={synergies} />
                    )
                }
            </div>
            <div>
                <Button onClick={() => setMenuTraitsDisplay(!menuTraitsDisplay)}>
                    Filter
                </Button>
                <Button onClick={setCopyUrl}>
                    Share
                </Button>
            </div>
            {
                menuTraitsDisplay && (
                    <Traits
                        traits={traits}
                        selectedTraits={selectedTraits}
                        onClickSelectionTrait={onClickSelectionTrait}
                        onClickResetTraits={onClickResetTraits}
                        onClickDisplayTraits={() => setMenuTraitsDisplay(!menuTraitsDisplay)}
                    />
                )
            }
            <Champion
                champions={championsFilter}
                onClickSelectionChampion={onClickSelectionChampion}
                championSelect={championSelect}
            />
        </div>
    );
}

const mapStateToProps = state => {

    return {
        champions: state.SET_03.championsList,
        championsFilter: state.SET_03.championsFilter,
        traits: state.SET_03.traits,
        board: state.SET_03.board,
    };
};

export default connect(mapStateToProps)(Builder);