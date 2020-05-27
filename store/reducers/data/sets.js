// IMPORT DATA FILES FOR SET_03
import champions_set03 from '../../../data/set3/champions.json';
import traits_set03 from '../../../data/set3/traits.json';
import items_set03 from '../../../data/set3/items.json';
import * as images_items_set03 from '../../../data/set3/items/items.js';
import * as images_champions_set03 from '../../../data/set3/champions/champions.js';
import * as images_traits_set03 from '../../../data/set3/traits/traits.js';
////////////////////////////////////////////

// IMPORT DATA FILES FOR SET_03 MID-TRACK
import champions_set03_MT from '../../../data/set3_MT/champions.json';
import traits_set03_MT from '../../../data/set3_MT/traits.json';
import items_set03_MT from '../../../data/set3_MT/items.json';
import * as images_items_set03_MT from '../../../data/set3_MT/items/items.js';
import * as images_champions_set03_MT from '../../../data/set3_MT/champions/champions.js';
import * as images_traits_set03_MT from '../../../data/set3_MT/traits/traits.js';
////////////////////////////////////////////

export const SET_03 = {
    id: 'SET_03',
    champions: champions_set03,
    traits: traits_set03,
    items: items_set03,
    images: {
        items: images_items_set03, 
        champions: images_champions_set03,
        traits: images_traits_set03
    }
};

export const SET_03_MT = {
    id: 'SET_03_MT',
    champions: champions_set03_MT,
    traits: traits_set03_MT,
    items: items_set03_MT,
    images: {
        items: images_items_set03_MT,
        champions: images_champions_set03_MT,
        traits: images_traits_set03_MT
    }
};

export const CUR_SET = {
    ...SET_03_MT,
};