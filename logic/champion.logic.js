
export const addChampion = (board, e, championsFilter, championSelect) => {
    const getXCood = e.target.id.split("__")[1];
    const getYCood = e.target.id.split("__")[2];
    board[getXCood][getYCood] = championsFilter.filter(champion => champion.championId === championSelect)[0];
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
