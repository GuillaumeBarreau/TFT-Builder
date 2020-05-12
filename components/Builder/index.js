import { useState } from "react";
import { connect } from 'react-redux';

import style from './styled.module.css';

import { Board } from '../Board';
import { Champions } from '../ListChampions';
import { Items } from '../ListItems';
import { Traits } from '../Traits';
import { Synergies } from '../Synergies';
import { Button } from '../communs/Button';
import { List } from '../List';
import { RESET_TRAITS_ACTION, SORT_CHAMPIONS_ACTION, ADD_CHAMPION_ACTION, DELETE_CHAMPION_ACTION, ADD_ITEM_ACTION, DELETE_ITEM_ACTION } from '../../store/actions/builder';
import { addOrDeleteTrait } from '../../logic/traits.logic';
import { renderSynergies } from '../../logic/synergies.logic';
import { countChampion } from '../../logic/champion.logic';
import { convertBoardToUrl } from '../../logic/convertBoardToUrl.logic';

export const Builder = ({ dispatch, champions, items, championsFilter, traits, board }) => {

    const [championSelect, setChampionSelect] = useState('');
    const [itemSelect, setItemSelect] = useState('');
    const [menuTraitsDisplay, setMenuTraitsDisplay] = useState(false);
    const [selectedTraits, setSelectedTraits] = useState([]);
    const [traitHover, setTraitHover] = useState(null);
    const [listSwap, setListSwap] = useState(false);

    const setCopyUrl = () => {
        const query = convertBoardToUrl(board);
        return navigator.clipboard.writeText(`${location.protocol}//${location.host}/?deck=${query}`)
    }

    const onClickSelectionChampion = (e) => {
        setChampionSelect(e.target.id)
    };

    const onMouseLeaveSelectionTrait = () => {
        setTraitHover(null)
    };

    const onMouseEnterSelectionTrait = (trait) => {
        setTraitHover(trait)
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
        setChampionSelect('');
    };

    const onClickAddItem = (event) => {
        event.preventDefault();
        if (!itemSelect) return;
        if (!event.currentTarget.childElementCount) return;
        dispatch(ADD_ITEM_ACTION(event.currentTarget, itemSelect))
    };

    const onClickDeleteChampion = (event) => {
        event.stopPropagation();
        dispatch(DELETE_CHAMPION_ACTION(event.currentTarget))
    };

    const onClickDeleteItem = (event, item) => {
        event.stopPropagation();
        dispatch(DELETE_ITEM_ACTION(event.currentTarget, item))
    };

    const synergies = renderSynergies(champions, traits, board);
    const onClickAddElement = listSwap ? onClickAddItem : onClickAddChampion;

    const list = !listSwap
        ? (
            <Champions
                champions={championsFilter}
                onClickSelectionChampion={onClickSelectionChampion}
                championSelect={championSelect}
                traitHover={traitHover}
            />
        )
        : (
            <Items
                items={items}
                itemSelect={itemSelect}
                onClickSelectionItem={onClickSelectionItem}
            />
        )

    return (
        <div className={style.mainContent}>
            <div className={style.mainContent_board}>
                <Board
                    onClickDeleteChampion={onClickDeleteChampion}
                    onClickDeleteItem={onClickDeleteItem}
                    onClickAddElement={onClickAddElement}
                    board={board}
                    traitHover={traitHover}
                />
                {
                    Object.keys(synergies).length > 0 && (
                        <Synergies
                            synergies={synergies}
                            onMouseEnterSelectionTrait={onMouseEnterSelectionTrait}
                            onMouseLeaveSelectionTrait={onMouseLeaveSelectionTrait}
                        />
                    )
                }
            </div>
            <div>
                {
                    !listSwap &&
                    <Button onClick={() => setMenuTraitsDisplay(!menuTraitsDisplay)}>
                        {
                            menuTraitsDisplay ? 'Close' : 'Filter'
                        }
                    </Button>
                }
                {
                    /* <Button onClick={setCopyUrl}>
                     Share
                    </Button> */
                }
                <Button onClick={() => setListSwap(!listSwap)}>
                    {
                        listSwap ? 'Champions' : 'Items'
                    }
                </Button>
            </div>
            {
                (menuTraitsDisplay && !listSwap) && (
                    <Traits
                        traits={traits}
                        selectedTraits={selectedTraits}
                        onClickSelectionTrait={onClickSelectionTrait}
                        onClickResetTraits={onClickResetTraits}
                        onClickDisplayTraits={() => setMenuTraitsDisplay(!menuTraitsDisplay)}
                        onMouseLeaveSelectionTrait={onMouseLeaveSelectionTrait}
                        onMouseEnterSelectionTrait={onMouseEnterSelectionTrait}
                    />
                )
            }
            {
                <List>
                    {list}
                </List>
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