import { RESET_SET_03, FILTER_SET_03 } from '../../actions/set03/actionsTypes';

import champions from '../../../data/set3/champions.json';
import traits from '../../../data/set3/traits.json';

const initialState = {
    championsFilter: champions,
    championsList: champions,
    traits: traits
};

const championsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_SET_03:
            
            return {
                ...state,
                ...initialState
            };

        case FILTER_SET_03:
            
            const championsSort = action.trait.map((action) => {
                const sorts = initialState.championsFilter.filter(
                    (champion) => {
                        return champion.traits.indexOf(action) !== -1
                    }
                )
                return sorts
            })

            const ConcatChampionsSort = [...new Set(
                Object.keys(championsSort).reduce(function (arr, key) {
                    return arr.concat(championsSort[key]);
            }, []))];
            
            
            return {
                ...state,
                championsFilter: ConcatChampionsSort || [],
            };

        default:
            return {
                ...initialState
            };
    }
};

export default championsReducer;