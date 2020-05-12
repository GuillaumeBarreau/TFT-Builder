import { RESET_TRAITS, SORT_CHAMPIONS } from '../actions/actionsTypes';
import { ConcatMultidimensionalArray } from '../../logic/ConcatMultidimensionalArray.logic';
import { CUR_SET } from './data/sets';

const initialState = {
    data: CUR_SET.champions,
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_TRAITS:

            return {
                ...state,
                data: CUR_SET.champions,
            };

        case SORT_CHAMPIONS: {

            const { traits } = action;
            const championsSort = traits.map((action) => {
                const sorts = CUR_SET.champions.filter(
                    (champion) => {
                        return champion.traits.indexOf(action) !== -1
                    }
                )
                return sorts
            })
            const initChampionsFilter = (traits.length)
                ? [... new Set(ConcatMultidimensionalArray(championsSort))]
                : CUR_SET.champions;

            return {
                ...state,
                data: initChampionsFilter
            };
        }
        default:

            return state;
    }
};
