export const addItem = (board, target, itemSelect) => {
    const newBoard = [...board];
    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    
    if (newBoard[getXCood][getYCood].hasOwnProperty('items')){
        if (newBoard[getXCood][getYCood].items.length < 3) {
            newBoard[getXCood][getYCood].items = [...newBoard[getXCood][getYCood].items, itemSelect]
        }
    } else {
        newBoard[getXCood][getYCood].items = [itemSelect]
    }
    
    return newBoard;
};

export const deleteItem = (board, target) => {
    const newBoard = [...board];
    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    const getIndex = target.id.split("__")[3];

    newBoard[getXCood][getYCood].items.splice(getIndex, 1)

    return newBoard;
};

