/**
 * Problem URL: https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 Do not return anything, modify nums1 in-place instead.

 */

 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let nums2counter = 0;
    for(let i = m; i < nums1.length; i++){
        if(nums2counter< n){
            nums1[i] = nums2[nums2counter]
        }
        nums2counter++
    }
    nums1.sort((a,b) => a-b)
 };

 export { merge as mergeSortedArrays };
