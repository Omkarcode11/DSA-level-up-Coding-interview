
// Sorting Subarray
// Write a function that takes in an array and returns two integers, denoting starting and ending indices of the smallest subarray in the input array that needs to be sorted in place so that the entire input is sorted.

// If the input array is already sorted, return a pair [-1,-1].

// Sample Input

// [0, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 19, 29]
// Sample Output

// [4,6]
// Explanation

// If we sort the subarray [10, 11, 7] then entire array becomes sorted.


function sortingSubArr(arr){
    let i = 0 
    while(arr[i]<arr[i+1]){
        i++
    }
    let endNum = arr[i+1]
     while(arr[i])
}