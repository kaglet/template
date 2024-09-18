function analyzeArray(arr) {
    if (arr.includes(undefined)) {
        throw new Error("Array has holes");
    }
    
    let total = arr.reduce((total, element) => {
        if (typeof element !== 'number' || isNaN(element)) {
            throw new Error("Array has non-numbers");
        }
        return total + element;
    }, 0);

    let average = isNaN(total / arr.length) ? undefined : total / arr.length;

    // Alternatively: Math.min(...arr)
    let min = arr.reduce((min, element) => {
        if (element < min) {
            return element;
        }

        return min;
    }, arr[0]);

    let max = arr.reduce((min, element) => {
        if (element > min) {
            return element;
        }
        
        return min;
    }, arr[0]);

    let length = arr.length;

    return {
        average,
        min,
        max,
        length
    }
}

module.exports = analyzeArray;