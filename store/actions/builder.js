import { RESET_TRAITS, SORT_CHAMPIONS, ADD_CHAMPION, DELETE_CHAMPION, ADD_ITEM, DELETE_ITEM } from './actionsTypes';

export const RESET_TRAITS_ACTION = () => ({ 
    type: RESET_TRAITS
});

export const SORT_CHAMPIONS_ACTION = (traitSelected) => ({ 
    type: SORT_CHAMPIONS,
    traits: traitSelected
});

export const ADD_CHAMPION_ACTION = (target, championSelect) => ({ 
    type: ADD_CHAMPION,
    value: championSelect,
    target: target
});

export const DELETE_CHAMPION_ACTION = (target) => ({ 
    type: DELETE_CHAMPION,
    target: target
});

export const ADD_ITEM_ACTION = (target, itemSelect) => ({
    type: ADD_ITEM,
    value: itemSelect,
    target: target
});

export const DELETE_ITEM_ACTION = (target, value) => ({
    type: DELETE_ITEM,
    target: target,
    value: value
});