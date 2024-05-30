import { quickSort } from "algo/quicksort";

describe("Quicksort", () => {
    

    test('check if array is sorted', () => {
    const array = [1,3,0,4, 4];
    const sortedArray = quickSort(array);
    expect(sortedArray).toEqual([0,1,3,4,4])
    })

    test('check if empty array', () => {
        const array: Array<number> = [];
        const sortedArray = quickSort(array);
        expect(sortedArray).toEqual([])
        })

    test('check if sorted array', () => {
        const array: Array<number> = [1];
        const sortedArray = quickSort(array);
        expect(sortedArray).toEqual([1])
        })

})