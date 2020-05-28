
export const addChampion = (board, target, champions, championSelect) => {

    // ON splite la valeur reçu de {target} ex:"case__0__1" pour récupérer les Positions X et Y du Onclick dans notre tableau board.
    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    // La position du {board}[X][Y] récupére les données de élément dans le tableau champions correspond à {championSelect}
    board[getXCood][getYCood] = {...champions.find(champion => champion.championId === championSelect)};
    // ON retourne notre {board}
    
    return board;
};

export const moveChampion = (board, initPosition, targetPosition) => {
    
    // ON splite la valeur reçu de {initPosition} ex:"case__0__1" pour récupérer les Positions X et Y dans notre tableau board et connaitre la position du DRAG.
    const getInitPositionXCood = initPosition.split("__")[1];
    const getInitPositionYCood = initPosition.split("__")[2];
    // ON splite la valeur reçu de {targetPosition} ex:"case__0__1" pour récupérer les Positions X et Y de notre tableau boardet connaitre la position du DROP.
    const getTargetPositionXCood = targetPosition.split("__")[1];
    const getTargetPositionYCood = targetPosition.split("__")[2];
    // Init {dataChampion}
    let dataChampion = {};
    // Si la du DROP à à déjà des données dans on la stocke dans la variable {dataChampion}.
    if (Object.prototype.hasOwnProperty.call(board[getTargetPositionXCood][getTargetPositionYCood], 'name')) {
        dataChampion = { ...board[getTargetPositionXCood][getTargetPositionYCood]}
        board[getTargetPositionXCood][getTargetPositionYCood] = {}
    }
    // La position du {board} pour l'action DROP récupére la valeur du position du {DRAG}
    board[getTargetPositionXCood][getTargetPositionYCood] = board[getInitPositionXCood][getInitPositionYCood];
    // La position du {board} pour l'action DRAG récupére la valeur de {dataChampion}
    board[getInitPositionXCood][getInitPositionYCood] = dataChampion;
    // On retourne notre {board}
    return board;
};

export const deleteChampion = (board, target) => {

    const getXCood = target.split("__")[1];
    const getYCood = target.split("__")[2];

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
