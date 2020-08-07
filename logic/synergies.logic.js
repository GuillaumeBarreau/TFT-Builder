import { concatMultidimensionalArray } from './arrayProcessing/concatMultidimensionalArray.logic';

export const renderSynergies = (championsList, traits, board) => {

    let championsSelected = [];

    board.forEach((lane) => {
        championsSelected = [...championsSelected, ...lane.filter((data) => Object.keys(data).length)]
    });

    let noDuplicate= [];

    championsSelected.forEach(champion => {
        if (!noDuplicate.some(champ => champion.championId === champ.championId)) {
            noDuplicate = [...noDuplicate, champion]
        }
    });
    
    const getOnlyChampionsTraits = noDuplicate.map(data => data && data.traits);

    const concatChampionsTraits = concatMultidimensionalArray(getOnlyChampionsTraits);

    const synergies = {};

    concatChampionsTraits.forEach(name => {

        const data = traits.find(trait => trait.key === name);
        
        (synergies[name])
            ? synergies[name].count++
            : synergies[name] = {
                key: name,
                name: name.split('_')[1],
                count: 1,
                sets: data.sets,
                description: data.description,
                level: 'partial'
            }
    });
    
    return synergies;
}