import { mergeSortedArrays } from "leetcode/88-merge-sorted-arrays";

describe("Leetcode 88", () => {
    test("First Test case", () =>{
        const array1 = [1,2,3,0,0,0];
        const array2 = [2,5,6];
        const m=3
        const n = 3
        mergeSortedArrays(array1, m, array2, n);
        expect(array1).toEqual([1,2,2,3,5,6])
    })

    test("Second Test case", () =>{
        const array1 = [1];
        const array2: number[] = [];
        const m=1
        const n = 0
        mergeSortedArrays(array1, m, array2, n);
        expect(array1).toEqual([1])
    })

    test("Third Test case", () =>{
        const array1 = [0];
        const array2: number[] = [1];
        const m=0
        const n = 1
        mergeSortedArrays(array1, m, array2, n);
        expect(array1).toEqual([1])
    })

    test("Fourth Test case", () =>{
        const array1 = [-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        const array2: number[] = [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9];
        const m=55
        const n = 99
        mergeSortedArrays(array1, m, array2, n);
        expect(array1).toEqual([-10,-10,-10,-10,-9,-9,-9,-9,-9,-9,-9,-8,-8,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-4,-4,-4,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9])
    })
})