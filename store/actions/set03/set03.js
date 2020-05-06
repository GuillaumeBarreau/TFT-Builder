import { RESET_SET_03, FILTER_SET_03 } from './actionsTypes';

export const RESET_SET_03_ACTION = () => ({ 
    type: RESET_SET_03
});

export const FILTER_SET_03_ACTION = (traitSelected) => ({ 
    type: FILTER_SET_03,
    trait: traitSelected
});
