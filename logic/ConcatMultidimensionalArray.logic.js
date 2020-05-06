export const ConcatMultidimensionalArray = (array) => {
    
    return Object.keys(array).reduce(function (arr, key) {
        return arr.concat(array[key]);
    }, [])
};
