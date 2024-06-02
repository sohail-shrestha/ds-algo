import { mergeSort } from "algo/merge-sort";

describe("Merge Sort", () => {
    

    test('check if array is sorted', () => {
    expect(mergeSort([2,1,3,4,5,9,8,6,7])).toEqual([1,2,3,4,5,6,7,8,9])
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