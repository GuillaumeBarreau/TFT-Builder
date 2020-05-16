import combineItems from '../data/set3/combineItems.json';

const itemsSpatuleTraits = {
    'TFT3_DarkStarsHeart': 'TFT3_DarkStar',
    'TFT3_CelestialOrb': 'TFT3_Celestial',
    'TFT3_RebelMedal': 'TFT3_Rebel',
    'TFT3_StarGuardiansCharm': 'TFT3_StarGuardian',
    'TFT3_DemolitionistsCharge': 'TFT3_Demolitionist',
    'TFT3_InfiltratorsTalons': 'TFT3_Infiltrator',
    'TFT3_BladeoftheRuinedKing': 'TFT3_Blademaster',
    'TFT3_ProtectorsChestguard': 'TFT3_Protector',
};

export const addItem = (board, target, itemSelect) => {

    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];

    if (board[getXCood][getYCood].traits.indexOf(itemsSpatuleTraits[itemSelect]) !== -1) {
        
        return board;
    }

    if (Object.prototype.hasOwnProperty.call(board[getXCood][getYCood], 'items')){

        if (board[getXCood][getYCood].items.length < 3) {
      
            combineItems.forEach(item => {
                if (item.id === itemSelect) {
                    board[getXCood][getYCood].items.forEach( boardItem => {
                        if (item.combination[boardItem]) {
                            itemSelect = item.combination[boardItem]

                            if ((board[getXCood][getYCood].traits.indexOf(itemsSpatuleTraits[itemSelect]) === -1)) {
                                board[getXCood][getYCood].items = board[getXCood][getYCood].items.filter(value => value !== boardItem)
                            } else {
                                throw 'error';
                            }
                        }
                    })
                }
            })

            if (Object.prototype.hasOwnProperty.call(itemsSpatuleTraits, itemSelect) && board[getXCood][getYCood].traits.indexOf(itemsSpatuleTraits[itemSelect]) === -1) {
                board[getXCood][getYCood].traits = [...board[getXCood][getYCood].traits, itemsSpatuleTraits[itemSelect]]
            } 

            board[getXCood][getYCood].items = [...board[getXCood][getYCood].items, itemSelect]
            
        }
        else if (board[getXCood][getYCood].items.length === 3) {

            combineItems.forEach(item => {
                if (item.id === itemSelect) {
                    board[getXCood][getYCood].items.forEach(boardItem => {
                        if (item.combination[boardItem]) {
                            itemSelect = item.combination[boardItem]

                            if ((board[getXCood][getYCood].traits.indexOf(itemsSpatuleTraits[itemSelect]) === -1)) {
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

        if (Object.prototype.hasOwnProperty.call(itemsSpatuleTraits, itemSelect) && board[getXCood][getYCood].traits.indexOf(itemsSpatuleTraits[itemSelect]) === -1) {
            board[getXCood][getYCood].traits = [...board[getXCood][getYCood].traits, itemsSpatuleTraits[itemSelect]]
        } 

        board[getXCood][getYCood].items = [itemSelect]
    }

    return board;
};

export const deleteItem = (board, target) => {

    const getXCood = target.id.split("__")[1];
    const getYCood = target.id.split("__")[2];
    const getIndex = target.id.split("__")[3];

    const getItem = board[getXCood][getYCood].items[getIndex]
    
    if (board[getXCood][getYCood].traits.indexOf(itemsSpatuleTraits[getItem]) !== -1) {
        board[getXCood][getYCood].traits = board[getXCood][getYCood].traits.filter(trait => trait !== itemsSpatuleTraits[getItem])
    } 

    board[getXCood][getYCood].items.splice(getIndex, 1)

    return board;
};

