import { RESET_TRAITS, SORT_CHAMPIONS, ADD_CHAMPION, DELETE_CHAMPION } from './actionsTypes';

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
