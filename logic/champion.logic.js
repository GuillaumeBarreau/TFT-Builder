
export const addChampion = (board, target, champions, championSelect) => {
    
    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    board[getXCood][getYCood] = {...champions.find(champion => champion.championId === championSelect)};
    
    return board;
};

export const deleteChampion = (board, target) => {

    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    board[getXCood][getYCood] = {};

    return board;
};

export const countChampion = (board) => {
    let count = 0;
    board.forEach((lane) => {
        lane.forEach(piece => Object.keys(piece).length !== 0
            ? count += 1
            : null
        )
    });
    return count;
};
