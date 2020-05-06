import { addElementIntoArray } from './addElementIntoArray.logic';
import { deleteElementIntoArray } from './deleteElementIntoArray.logic'

export const arrayProcessing = (array, value) => {
    let copyArray = [...array];

    const index = copyArray.indexOf(value);

    copyArray =
        copyArray.indexOf(value) !== -1
            ? deleteElementIntoArray(copyArray, index)
            : addElementIntoArray(copyArray, value);

    return copyArray;
    
}