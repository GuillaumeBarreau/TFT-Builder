import { combineReducers } from 'redux';
import { itemsReducer } from './items.reducer';
import { championsReducer } from './champions.reducer';
import { filterReducer } from './filter.reducer';
import { boardReducer } from './board.reducer';
import { traitsReducer } from './traits.reducer';
import { imagesReducer } from './images.reducer';

const STORE = {
    items: itemsReducer,
    filter: filterReducer,
    board: boardReducer,
    champions: championsReducer,
    traits: traitsReducer,
    images: imagesReducer,
};

const rootReducer = combineReducers(
    STORE
);

export default rootReducer;