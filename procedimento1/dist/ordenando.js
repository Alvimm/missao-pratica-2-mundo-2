"use strict";
const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};
const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const randomIndex1 = Math.floor(Math.random() * array.length);
        const randomIndex2 = Math.floor(Math.random() * array.length);
        [array[randomIndex1], array[randomIndex2]] = [array[randomIndex2], array[randomIndex1]];
    }
};
const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
};
const selection_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return array;
};
const quick_sort = (array, startIndex, endIndex) => {
    if (startIndex < endIndex) {
        const partitionIndex = partition(array, startIndex, endIndex);
        quick_sort(array, startIndex, partitionIndex - 1);
        quick_sort(array, partitionIndex + 1, endIndex);
    }
};
const partition = (array, startIndex, endIndex) => {
    const pivotIndex = endIndex;
    let partitionIndex = startIndex;
    for (let i = startIndex; i < endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
            partitionIndex++;
        }
    }
    [array[pivotIndex], array[partitionIndex]] = [array[partitionIndex], array[pivotIndex]];
    return partitionIndex;
};
//# sourceMappingURL=ordenando.js.map