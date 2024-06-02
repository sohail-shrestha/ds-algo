import { quickSort } from "algo/quick-sort"

describe("Quick sort test", () => {
    test("Array of size 0", () => {
        expect(quickSort([])).toEqual([])
    })

    test("Array of size 1", () => {
        expect(quickSort([1])).toEqual([1])
    })


    test("Sorting array", () => {
        expect(quickSort([2,1,3,4,5,9,8,6,7])).toEqual([1,2,3,4,5,6,7,8,9])
    })
})