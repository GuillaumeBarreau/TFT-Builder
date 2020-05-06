import { useState, useEffect } from "react";
import { connect } from 'react-redux';

import style from './Builder.module.css';

import { Board } from '../board/Board.js';
import { Champion } from '../champion/Champion.js';
import { Traits } from '../traits/Traits.js';
import { Synergies } from '../synergies/Synergies.js';

import { RESET_SET_03_ACTION, FILTER_SET_03_ACTION } from '../../store/actions/set03/set03';
import { arrayProcessing } from '../../logic/arrayProcessing/arrayProcessing.logic';
import { synergiesProcessing } from '../../logic/synergiesProcessing.logic';

export const Builder = ({ dispatch, championsList, championsFilter, traits, filterData }) => {

    // On initialise les States du projet.
    const [championSelect, setChampionSelect] = useState('');
    const [arrayChampionsSelected, setArrayChampionsSelected] = useState([]);
    const [arrayTraitSelected, setArrayTraitSelected] = useState([]);
    // const [synergies, setSynergies] = useState([]);
    const [board, setBoard] = useState([
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}]
    ]);

    const handleClickChampionSelect = (e) => {
        setChampionSelect(e.target.id)
    };

    const handleClickTraitReset = () => {
        dispatch(RESET_SET_03_ACTION());
        setArrayTraitSelected([]);
    };

    const handleClickTraitSelected = (value) => {
        const copyArrayTraitSelected = arrayProcessing(arrayTraitSelected, value);
        dispatch(FILTER_SET_03_ACTION(copyArrayTraitSelected));
        setArrayTraitSelected(copyArrayTraitSelected);
    };
    /* 
        Function pour placer un champion dans notre board 
        @PARAM e = eventement 
    */
    const putChampionIntoBoard = (e) => {
        e.preventDefault()
        if (!championSelect) return;

        let countChampionIntoBoard = 0;

        board.forEach((lane) => {
            lane.forEach(piece => Object.keys(piece).length !== 0 
                ? countChampionIntoBoard+=1 
                : null
            )
        });

         
        // Limite le nombre de champion sur le board
        // if (countChampionIntoBoard === 1) return;
        
        // On récupére la positon X et Y du tableau Board dans ID du target en découpant ID. 
        const getXCood = e.target.id.split("__")[1];
        const getYCood = e.target.id.split("__")[2];
        const newBoard = [...board];
        // On filtre et récupéreles datas qui correspondent à ID à la selection de notre target.
        newBoard[getXCood][getYCood] = championsFilter.filter(champion => champion.championId === championSelect)[0];
        // On enregistre état de notre nouveau board.
        setBoard(newBoard);
        setArrayChampionsSelected([...arrayChampionsSelected, championSelect]);
    };

    const synergies = synergiesProcessing(championsList, arrayChampionsSelected, traits);
    
    return (
        <div className={style.mainContent}>
            <div className={style.mainContent_board}>
                <Board
                    onClick={putChampionIntoBoard}
                    board={board}
                />
                {
                    Object.keys(synergies).length > 0 && (
                        <Synergies
                            synergies={synergies}
                        />
                    )
                }
         
            </div>
            <Traits
                traits={traits}
                traitSelected={arrayTraitSelected}
                onclick={handleClickTraitSelected}
                traitReset={handleClickTraitReset}
            />
            <Champion
                champions={championsFilter}
                onClick={handleClickChampionSelect}
                championSelect={championSelect}
            ></Champion>
          
           
        </div>
    );
}

const mapStateToProps = state => {

    return {
        championsList: state.SET_03.championsList,
        championsFilter: state.SET_03.championsFilter,
        traits: state.SET_03.traits,
        filterData: [],
    };
};

export default connect(mapStateToProps)(Builder);