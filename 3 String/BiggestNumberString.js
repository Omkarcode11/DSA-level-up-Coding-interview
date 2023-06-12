
// Biggest Number String
// You are given a vector of numbers. You want to concatenate these numbers together to form the lexicographically largest number. Print that largest number number. You can't rearrange the digits of any number, however you can place the numbers next to each other in any order.

// Input

// 10,11,20,30,3
// Output

// 330201110 
// You can verify that this is the largest number that we can form.


function concatenate(arr){
    arr.sort((a,b)=>String(b)-String(a))
    return arr.join('')
}

console.log(concatenate([10,11,20,30,3]))