
export const addChampion = (board, target, champions, championSelect) => {
    const newBoard = [...board];
    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    newBoard[getXCood][getYCood] = champions.find(champion => champion.championId === championSelect);
    return newBoard;
};

export const deleteChampion = (board, target) => {
    const newBoard = [...board];
    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    newBoard[getXCood][getYCood] = {};
    return newBoard;
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
