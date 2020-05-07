import { RESET_TRAITS, SORT_CHAMPIONS } from './actionsTypes';

export const RESET_TRAITS_ACTION = () => ({ 
    type: RESET_TRAITS
});

export const SORT_CHAMPIONS_ACTION = (traitSelected) => ({ 
    type: SORT_CHAMPIONS,
    trait: traitSelected
});
