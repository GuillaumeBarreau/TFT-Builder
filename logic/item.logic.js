/**
 * Adding one item into {board[x][y].items}.
 * @param {string} board - Board data to app.
 * @param {string} target - ID Onclick Event.
 * @param {string} itemSelect - Item Name selected.
 * @param {string} items - List items data.
 */
export const addItem = (board, target, itemSelect, items) => {
    let synergiesItems = getSynergiesItems(items);
    // ON splite la valeur reçu de {target} ex:"case__0__1" pour récupérer les Positions X et Y du Onclick dans notre tableau board.
    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    
    // Si la valeur de notre object dans la case XY de notre board posséde déja la même valeur que l'item selectionné alors un retourne notre board actuel 
    if (board[getXCood][getYCood].traits.indexOf(synergiesItems[itemSelect]) !== -1) {
        return board;
    }
    
    // On check si la propriété items existe dans notre object {board[getXCood][getYCood]}
    if (Object.prototype.hasOwnProperty.call(board[getXCood][getYCood], 'items')){

        // On compte si la case [X][Y] de notre board posséde moins de trois items
        if (board[getXCood][getYCood].items.length < 3) {
      
            items.forEach(item => {
                if (item.id === itemSelect) {
                    board[getXCood][getYCood].items.forEach( boardItem => {
                        
                        if (item.combination && item.combination[boardItem]) {
                            itemSelect = item.combination[boardItem]

                            if ((board[getXCood][getYCood].traits.indexOf(synergiesItems[itemSelect]) === -1)) {
                                board[getXCood][getYCood].items = board[getXCood][getYCood].items.filter(value => value !== boardItem)
                            } else {
                                throw 'error';
                            }
                        }
                    })
                }
            })

            if (Object.prototype.hasOwnProperty.call(synergiesItems, itemSelect) && board[getXCood][getYCood].traits.indexOf(synergiesItems[itemSelect]) === -1) {
                board[getXCood][getYCood].traits = [...board[getXCood][getYCood].traits, synergiesItems[itemSelect]]
            } 

            board[getXCood][getYCood].items = [...board[getXCood][getYCood].items, itemSelect]
            
        }
        // On compte si la case [X][Y] de notre board posséde trois items
        // Si c'est le cas on regarde si chacuns des items de la case [X][Y] de notre board à la propriété combination
        else if (board[getXCood][getYCood].items.length === 3) {

            items.forEach(item => {
                if (item.id === itemSelect) {
                    board[getXCood][getYCood].items.forEach(boardItem => {
                        if (item.combination &&  item.combination[boardItem]) {
                            itemSelect = item.combination[boardItem]

                            if ((board[getXCood][getYCood].traits.indexOf(synergiesItems[itemSelect]) === -1)) {
                                board[getXCood][getYCood].items = [...board[getXCood][getYCood].items.filter(value => value !== boardItem), itemSelect]
                            } else {
                                throw 'error';
                            }
                        }
                    })
                }
            })

        }

    } else {
        // On check si la propriété {itemSelect} existe dans notre object {synergiesItems}
        // &&
         // si la propriété traits de notre object{ board[getXCood][getYCood]} n'est pas présente dans le tableau
         // Si les conditions sont bien réunies on ajoute {synergiesItems[itemSelect]} dans l'attribus traits de notre tableau
        if (Object.prototype.hasOwnProperty.call(synergiesItems, itemSelect) && board[getXCood][getYCood].traits.indexOf(synergiesItems[itemSelect]) === -1) {
            board[getXCood][getYCood].traits = [...board[getXCood][getYCood].traits, synergiesItems[itemSelect]]
        } 

        board[getXCood][getYCood].items = [itemSelect]
    }

    return board;
};

/**
 * Removing one item into {board[x][y].items}.
 * @param {string} board - Board data to app.
 * @param {string} target - ID Onclick Event.
 * @param {string} items - List items data.
 */
export const deleteItem = (board, target, items) => {

    let synergiesItems = getSynergiesItems(items);

    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    const getIndex = target.id.split("__")[3];

    const getItem = board[getXCood][getYCood].items[getIndex]
    
    if (board[getXCood][getYCood].traits.indexOf(synergiesItems[getItem]) !== -1) {
        board[getXCood][getYCood].traits = board[getXCood][getYCood].traits.filter(value => value !== synergiesItems[getItem])
    } 

    board[getXCood][getYCood].items.splice(getIndex, 1)

    return board;
};


const getSynergiesItems = (items) => {
    const synergies = {};

    items.forEach((item)=> {
        if (item.synergy) {
            synergies[item.id] = item.synergy
        }
    })

    return synergies
}