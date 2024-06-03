/*
* URL: https://leetcode.com/problems/valid-palindrome/?envType=study-plan-v2&envId=top-interview-150
*/

function isPalindrome(s: string): boolean {
    const sanitizedString = s.replace(/[^a-zA-Z0-9]/g, '');
    let i = 0;
    let j = sanitizedString.length -1

    while(i <= j ){
        const head = sanitizedString.charAt(i).toLowerCase()
        const tail = sanitizedString.charAt(j).toLowerCase()
            if(head !== tail){
                console.debug("HEAD === TAIL", sanitizedString, head, tail, i, j)
                return false;
            }
        i++;
        j--;     
    }
    return true
};


export { isPalindrome };

