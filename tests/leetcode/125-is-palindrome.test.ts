import { isPalindrome } from "leetcode/125-valid-palindrome";

describe('palindrome', () => { 

    test('aba', () => {
        expect(isPalindrome('aba')).toEqual(true);
    })

    test("palindrome", () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true)
    })

    test("palindrome", () => {
        expect(isPalindrome("race a car")).toEqual(false)
    })

    test("palindrome", () => {
        expect(isPalindrome(" ")).toEqual(true)
    })

    test("palindrome", () => {
        expect(isPalindrome("0110")).toEqual(true)
    })

    test("palindrome", () => {
        expect(isPalindrome("0P")).toEqual(false)
    })
 })
