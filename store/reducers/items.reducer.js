import { CUR_SET } from './data/sets';

const initialState = {
    data: CUR_SET.items,
};

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:

            return state;
    }
};
