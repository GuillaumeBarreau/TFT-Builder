import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useDrag } from 'react-dnd'

import style from './styled.module.css';

import { Board } from '../Board';
import { Champion } from '../Champion';
import { Traits } from '../Traits';
import { Synergies } from '../Synergies';
import { Button } from '../communs/Button';

import { RESET_TRAITS_ACTION, SORT_CHAMPIONS_ACTION } from '../../store/actions/builder';
import { addOrDeleteTrait } from '../../logic/traits.logic';
import { renderSynergies } from '../../logic/synergies.logic';
import { addChampion, countChampion } from '../../logic/champion.logic';

export const Builder = ({ dispatch, champions, championsFilter, traits, filterData }) => {

    const [championSelect, setChampionSelect] = useState('');
    const [selectedChampions, setSelectedChampions] = useState([]);
    const [menuTraitsDisplay, setMenuTraitsDisplay] = useState(false);
    const [selectedTraits, setSelectedTraits] = useState([]);
    const [board, setBoard] = useState([
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}]
    ]);
    // const [collectedProps, drag] = useDrag({
    //     item: { id, type },
    // })
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
    /* 
        Function pour placer un champion dans notre board 
        @PARAM e = eventement 
    */
    const onClickAddChampion = (e) => {
        e.preventDefault()
        if (!championSelect) return;
        if (countChampion(board) >= 15) return;
        const newBoard = addChampion(board, event, championsFilter, championSelect);
        setBoard(newBoard);
        setSelectedChampions([...selectedChampions, championSelect]);
    };

    const synergies = renderSynergies(champions, selectedChampions, traits);

    return (
        <div className={style.mainContent}>
            <div className={style.mainContent_board}>
                <Board
                    onClick={onClickAddChampion}
                    board={board}
                />
                {
                    Object.keys(synergies).length > 0 && (
                        <Synergies synergies={synergies} />
                    )
                }

            </div>
            <Button onClick={() => setMenuTraitsDisplay(!menuTraitsDisplay)}>
                Filter
            </Button>
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
            ></Champion>


        </div>
    );
}

const mapStateToProps = state => {

    return {
        champions: state.SET_03.championsList,
        championsFilter: state.SET_03.championsFilter,
        traits: state.SET_03.traits,
        filterData: [],
    };
};

export default connect(mapStateToProps)(Builder);