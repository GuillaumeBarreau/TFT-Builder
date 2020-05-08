import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useRouter } from 'next/router'

import style from './styled.module.css';

import { Board } from '../Board';
import { Champions } from '../Champions';
import { Items } from '../Items';
import { Traits } from '../Traits';
import { Synergies } from '../Synergies';
import { Button } from '../communs/Button';
import { Switch } from '../communs/Switch';

import { RESET_TRAITS_ACTION, SORT_CHAMPIONS_ACTION, ADD_CHAMPION_ACTION, DELETE_CHAMPION_ACTION } from '../../store/actions/builder';
import { addOrDeleteTrait } from '../../logic/traits.logic';
import { renderSynergies } from '../../logic/synergies.logic';
import { countChampion } from '../../logic/champion.logic';
import { convertBoardToUrl, convertUrlToObject } from '../../logic/convertBoardToUrl.logic';

export const Builder = ({ dispatch, champions, items, championsFilter, traits, board }) => {

    const [championSelect, setChampionSelect] = useState('');
    const [itemSelect, setItemSelect] = useState('');
    const [menuTraitsDisplay, setMenuTraitsDisplay] = useState(false);
    const [selectedTraits, setSelectedTraits] = useState([]);
    const [listSwap, setListSwap] = useState(false);

    const setCopyUrl = () => {
        const query = convertBoardToUrl(board);
        return navigator.clipboard.writeText(`${location.protocol}//${location.host}/?deck=${query}`)
    }

    const onClickSelectionChampion = (e) => {
        setChampionSelect(e.target.id)
    };

    const onClickSelectionItem = (e) => {
        setItemSelect(e.target.id)
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
    
    const list = !listSwap 
        ?
            <Champions
                champions={championsFilter}
                onClickSelectionChampion={onClickSelectionChampion}
                championSelect={championSelect}
            /> 
        :
            <Items
                items={items}
                itemSelect={itemSelect}
                onClickSelectionItem={onClickSelectionItem}
            />

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
                {
                    !listSwap && 
                        <Button onClick={() => setMenuTraitsDisplay(!menuTraitsDisplay)}>
                            Filter
                        </Button>
                }
                <Button onClick={setCopyUrl}>
                    Share
                </Button>
                <Switch onClick={() => setListSwap(!listSwap)}>
                    Swap
                </Switch>
            </div>
            {
                (menuTraitsDisplay && !listSwap) &&  (
                    <Traits
                        traits={traits}
                        selectedTraits={selectedTraits}
                        onClickSelectionTrait={onClickSelectionTrait}
                        onClickResetTraits={onClickResetTraits}
                        onClickDisplayTraits={() => setMenuTraitsDisplay(!menuTraitsDisplay)}
                    />
                )
            }
            {
                list
            }
        </div>
    );
}

const mapStateToProps = state => {

    return {
        champions: state.SET_03.championsList,
        championsFilter: state.SET_03.championsFilter,
        traits: state.SET_03.traits,
        board: state.SET_03.board,
        items: state.SET_03.itemsList,
    };
};

export default connect(mapStateToProps)(Builder);