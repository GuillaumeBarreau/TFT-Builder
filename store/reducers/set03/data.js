import { RESET_TRAITS, SORT_CHAMPIONS, ADD_CHAMPION, DELETE_CHAMPION } from '../../actions/actionsTypes';
import { ConcatMultidimensionalArray } from '../../../logic/ConcatMultidimensionalArray.logic';

import champions from '../../../data/set3/champions.json';
import traits from '../../../data/set3/traits.json';

import { addChampion, deleteChampion } from '../../../logic/champion.logic';

const board = [
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}]
];

const initialState = {
    championsFilter: champions,
    championsList: champions,
    traits: traits,
    board: board
};

const championsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_TRAITS:

            return {
                ...state,
                championsFilter: champions,
            };

        case ADD_CHAMPION:
            const { target, value } = action;

            return {
                ...state,
                board: addChampion(state.board, target, champions, value)
            };

        case DELETE_CHAMPION:
            
            return {
                ...state,
                board: deleteChampion(state.board, action.target)
            };

        case SORT_CHAMPIONS:
            const { traits } = action;
            let championsSort = traits.map((action) => {
                const sorts = champions.filter(
                    (champion) => {
                        return champion.traits.indexOf(action) !== -1
                    }
                )
                return sorts
            })
            const getUniqChampions = [... new Set(ConcatMultidimensionalArray(championsSort))];

            return {
                ...state,
                championsFilter: getUniqChampions || [],
            };

        default:

            return {
                ...initialState
            };
    }
};

export default championsReducer;