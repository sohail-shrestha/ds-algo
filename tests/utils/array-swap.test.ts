import { swap } from "utils/array-swap";

describe("Test Array Swap", () => {
    test('Check if array can be swapped', () => {
        const input = [1, 2]
        const swappedArray = swap(input, 0,1);
        expect(swappedArray).toEqual([2,1])
    })

    test('Check no index', () => {
        const input: Array<number> = []
        expect(() => swap(input, 0,1)).toThrow("Array length must be greater than 2.")
    })

    test("check out of index.", () => {
        const input: Array<number> = [1,2]
        expect(() => swap(input, 2,3)).toThrow("Index out of bounds.")

    })

    test("check swapping same index.", () => {
        const input: Array<number> = [1,2,3]
        expect(swap(input, 1,1)).toEqual([1,2,3])

    })
})