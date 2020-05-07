import { RESET_TRAITS, SORT_CHAMPIONS } from '../../actions/actionsTypes';
import { ConcatMultidimensionalArray } from '../../../logic/ConcatMultidimensionalArray.logic';

import champions from '../../../data/set3/champions.json';
import traits from '../../../data/set3/traits.json';

const initialState = {
    championsFilter: champions,
    championsList: champions,
    traits: traits
};

const championsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_TRAITS:
            return {
                ...state,
                ...initialState
            };

        case SORT_CHAMPIONS:
            let championsSort = action.trait.map((action) => {
                const sorts = initialState.championsFilter.filter(
                    (champion) => {
                        return champion.traits.indexOf(action) !== -1
                    }
                )
                return sorts
            })

            championsSort = ConcatMultidimensionalArray(championsSort);
            
            return {
                ...state,
                championsFilter: championsSort || [],
            };

        default:
            return {
                ...initialState
            };
    }
};

export default championsReducer;