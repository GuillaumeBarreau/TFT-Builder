export const addItem = (board, target, itemSelect) => {

    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    // eslint-disable-next-line no-prototype-builtins
    if (board[getXCood][getYCood].hasOwnProperty('items')){
        if (board[getXCood][getYCood].items.length < 3) {
            board[getXCood][getYCood].items = [...board[getXCood][getYCood].items, itemSelect]
        }
    } else {
        board[getXCood][getYCood].items = [itemSelect]
    }
    
    return board;
};

export const deleteItem = (board, target) => {

    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    const getIndex = target.id.split("__")[3];

    board[getXCood][getYCood].items.splice(getIndex, 1)

    return board;
};

