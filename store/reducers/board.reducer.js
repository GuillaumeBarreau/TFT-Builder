import {  ADD_CHAMPION, DELETE_CHAMPION, ADD_ITEM, DELETE_ITEM } from '../actions/actionsTypes';
import { addChampion, deleteChampion } from '../../logic/champion.logic';
import { addItem, deleteItem } from '../../logic/item.logic';
import { CUR_SET } from './data/sets';

const board = [
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}]
];

const initialState = {
    data: [...board],
};

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CHAMPION:
            
            return {
                ...state,
                data: addChampion([...state.data], action.target, CUR_SET.champions, action.value)
            };

        case ADD_ITEM:
            console.log(CUR_SET.champions);
            
            return {
                ...state,
                data: addItem([...state.data], action.target, action.value)
            }

        case DELETE_ITEM:
            
            return {
                ...state,
                data: deleteItem([...state.data], action.target)
            }
        case DELETE_CHAMPION:
            
            return {
                ...state,
                data: deleteChampion([...state.data], action.target)
            };

        default:

            return state;
    }
};
