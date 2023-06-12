// Sorted Subsequences
// You are given a string, you need to print all subsequences
// of the string sorted by length and lexicographic sorted
// order if length is same.
// Sample Input
// abcd
// Sample Output
// ,a,b,c,d, ab, ac, ad, bc, bd, cd, abc, abd, acd, bcd, a
// bcd,


function sortSubsequences(str){
   let o = ''
   let subArr = []
   let subsequences = createSubsequences(str,o,subArr)

   subsequences.sort()

   return subsequences

}

function createSubsequences(str,o,subArr){
    if(str.length==0){
        subArr.push(o)
        return subArr
    }

    let char = str[0]
    let newStr= str.substr(1)

    createSubsequences(newStr,o+char,subArr)
    createSubsequences(newStr,o,subArr)
    return subArr
}

console.log(sortSubsequences('abc'))