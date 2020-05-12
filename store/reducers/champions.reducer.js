import { CUR_SET } from './data/sets';

const initialState = {
    data: CUR_SET.champions,
};

export const championsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:

            return state;
    }
};
