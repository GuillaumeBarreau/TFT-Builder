import { addElement } from './arrayProcessing/addElement.logic';
import { deleteElement } from './arrayProcessing/deleteElement.logic'

export const addOrDeleteTrait = (array, value) => {
    let copyArray = [...array];

    const index = copyArray.indexOf(value);

    copyArray =
        copyArray.indexOf(value) !== -1
            ? deleteElement(copyArray, index)
            : addElement(copyArray, value);

    return copyArray;

}
