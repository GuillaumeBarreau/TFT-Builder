import { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import style from './styled.module.css';
import { Board } from './Board';
import { Champions } from './ListChampions';
import { Items } from './ListItems';
import { Traits } from './Traits';
import { Synergies } from './Synergies';
import { Button } from '../communs/Button';
import { List } from './List';
import { RESET_TRAITS_ACTION, SORT_CHAMPIONS_ACTION, ADD_CHAMPION_ACTION, DELETE_CHAMPION_ACTION, ADD_ITEM_ACTION, DELETE_ITEM_ACTION, MOVE_CHAMPION_ACTION, CLEAR_BOARD_ACTION, SHARE_BOARD_ACTION } from '../../store/actions/builder';
import { addOrDeleteTrait } from '../../logic/traits.logic';
import { renderSynergies } from '../../logic/synergies.logic';
import { countChampion } from '../../logic/champion.logic';
import { convertBoardToUrl, convertUrlToObject } from '../../logic/convertBoardToUrl.logic';
import { AlertContext } from "../../contexts/AlertContext";
import copy from 'copy-to-clipboard';

export const Builder = ({ dispatch, champions, items, championsFilter, traits, board, images }) => {
    const [actionUser, setActionUser] = useState('');
    const [championSelect, setChampionSelect] = useState('');
    const [itemSelect, setItemSelect] = useState('');
    const [moveTargetId, setMoveTargetId] = useState('');
    const [menuTraitsDisplay, setMenuTraitsDisplay] = useState(false);
    const [selectedTraits, setSelectedTraits] = useState([]);
    const [traitHover, setTraitHover] = useState(null);
    const [listSwap, setListSwap] = useState(false);
    const [mongoDB, setMongoDB] = useState(false);
    const router = useRouter()
    const AlertContextValue = useContext(AlertContext);

    const endpoint = 'http://localhost:4040/api';

    useEffect(() => {
            axios.get(`${endpoint}`).then(() => {
                console.log("BDD ON")
                setMongoDB(true)
            }).catch(() => {
                    console.log("BDD OFF")
                }
            );
        
        if (router.query.deck && mongoDB) {
            axios.get(`${endpoint}/comps/${router.query.deck}`).then(res => {
                if (res.data._id) {
                    const convertData = convertUrlToObject(res.data.data);
                    dispatch(SHARE_BOARD_ACTION(convertData));
                    setMongoDB(false)
                }
            }).catch(
                () => {  

                }
            );
        }
    }, []);

    const postDataBoard = () => {
        axios.post(`${endpoint}/comps`, {
            data: convertBoardToUrl(board),
        }).then(res => {
            copy(`${location.protocol}//${location.host}/?deck=${res.data._id}`);
            AlertContextValue.setAlert({
                type: 'alert',
                message: `The URL is copied to your clipboard. `
            })
        });
    }

    const onClickChangeActionUser = (action) => {
        setActionUser(action)
    };

    const onClickSelectionChampion = (target) => {
        setChampionSelect(target)
    };

    const onClickSetMoveTargetId = (target) => {
        setMoveTargetId(target)
    };

    const onMouseLeaveSelectionTrait = () => {
        setTraitHover(null)
    };

    const onMouseEnterSelectionTrait = (trait) => {
        setTraitHover(trait)
    };

    const onClickSelectionItem = (itemId) => {
        setItemSelect(itemId)
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

    const onClickMoveChampion = (targetPosition) => {
        dispatch(MOVE_CHAMPION_ACTION(moveTargetId, targetPosition))
    };

    const onClickAddItem = (event) => {
        event.preventDefault();
        if (!itemSelect) return;
        if (!event.currentTarget.childElementCount) return;
        dispatch(ADD_ITEM_ACTION(event.currentTarget, itemSelect))
    };

    const onClickDeleteChampion = (event, target) => {
        event.stopPropagation();
        dispatch(DELETE_CHAMPION_ACTION(target))
    };

    const onClickDeleteItem = (event, item) => {
        event.stopPropagation();
        dispatch(DELETE_ITEM_ACTION(event.currentTarget, item))
    };

    const onClickClearboard = () => {
        dispatch(CLEAR_BOARD_ACTION())
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
                onClickChangeActionUser={onClickChangeActionUser}
                imagesChampions={images.champions}
            />
        )
        : (
            <Items
                items={items}
                itemSelect={itemSelect}
                onClickSelectionItem={onClickSelectionItem}
                onClickChangeActionUser={onClickChangeActionUser}
                imagesItems={images.items}
            />
        )

    return (
        <div className={style.mainContent}>
            <div className={style.mainContent_left} >
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
                            imagesTraits={images.traits}
                        />
                    )
                }
            </div>
            <div className={style.mainContent_mid}>
                <div className={style.mainContent_board}>
                    <Board
                        onClickDeleteChampion={onClickDeleteChampion}
                        onClickDeleteItem={onClickDeleteItem}
                        onClickAddElement={onClickAddElement}
                        onClickMoveChampion={onClickMoveChampion}
                        onClickSetMoveTargetId={onClickSetMoveTargetId}
                        board={board}
                        images={images}
                        traitHover={traitHover}
                        onClickSelectionChampion={onClickSelectionChampion}
                        actionUser={actionUser}
                        onClickChangeActionUser={onClickChangeActionUser}
                    />
                </div>
                <div className={style.mainContent_buttons}>
                    {
                        !listSwap &&
                        <Button onClick={() => setMenuTraitsDisplay(!menuTraitsDisplay)}>
                            {
                                menuTraitsDisplay ? 'Close' : 'Filter'
                            }
                        </Button>
                    }
                    <Button onClick={() => setListSwap(!listSwap)}>
                        {
                            listSwap ? 'Champions' : 'Items'
                        }
                    </Button>
                    {
                        countChampion(board) && (
                            <>
                                <Button color="warn" onClick={() => onClickClearboard()}>
                                    Clear
                                </Button>
                                { 
                                    mongoDB && <Button color="green" onClick={postDataBoard}>
                                        Save
                                    </Button>
                                }
                            </>
                        )
                    }
                </div>
                {
                    <List>
                        {list}
                    </List>
                }
            </div>
            <div className={style.mainContent_right} >
                {
                    Object.keys(synergies).length > 0 && (
                        <Synergies
                            synergies={synergies}
                            onMouseEnterSelectionTrait={onMouseEnterSelectionTrait}
                            onMouseLeaveSelectionTrait={onMouseLeaveSelectionTrait}
                            imagesTraits={images.traits}
                        />
                    )
                }
            </div>

        </div>
    );
};

Builder.propTypes = {
    dispatch: PropTypes.func,
    champions: PropTypes.arrayOf(
        PropTypes.shape({
            championId: PropTypes.string,
            cost: PropTypes.number,
            name: PropTypes.string,
            traits: PropTypes.arrayOf(PropTypes.string)
        })
    ).isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string
        })).isRequired,
    championsFilter: PropTypes.arrayOf(
        PropTypes.shape({
            championId: PropTypes.string,
            cost: PropTypes.number,
            name: PropTypes.string,
            traits: PropTypes.arrayOf(PropTypes.string)
        })
    ).isRequired,
    traits: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string,
            key: PropTypes.string,
            name: PropTypes.string,
            sets: PropTypes.arrayOf(
                PropTypes.shape({
                    max: PropTypes.number,
                    min: PropTypes.number,
                    style: PropTypes.string
                })
            ),
            type: PropTypes.string,
        })
    ).isRequired,
    board: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.object)
    ).isRequired
};

const mapStateToProps = state => {

    return {
        champions: state.champions.data,
        championsFilter: state.filter.data,
        traits: state.traits.data,
        board: state.board.data,
        items: state.items.data,
        images: state.images.data,
    };
};

export default connect(mapStateToProps)(Builder);