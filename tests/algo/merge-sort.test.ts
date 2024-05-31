import { mergeSort } from "algo/merge-sort";

describe("Merge Sort", () => {
    

    test('check if array is sorted', () => {
    const array = [1,3,0,4, 4];
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([0,1,3,4,4])
    })

    test('check if empty array', () => {
        const array: Array<number> = [];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([])
        })

    test('check if sorted array', () => {
        const array: Array<number> = [1];
        const sortedArray = mergeSort(array);
        expect(sortedArray).toEqual([1])
        })

})