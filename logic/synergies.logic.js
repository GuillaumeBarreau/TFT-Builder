import { ConcatMultidimensionalArray } from './ConcatMultidimensionalArray.logic';

export const renderSynergies = (championsList, championsSelected, traits) => {

    const getChampionsSelectedWidthData = championsSelected.map((championSelected) =>
        championsList.find((champion) =>
            championSelected === champion.championId
        )
    );

    const duplicateChampionSelectedDelete = [...new Set(getChampionsSelectedWidthData)];
    
    const getOnlyChampionsTraits = duplicateChampionSelectedDelete.map(data => data && data.traits);

    const concatChampionsTraits = ConcatMultidimensionalArray(getOnlyChampionsTraits);

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