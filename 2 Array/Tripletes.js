// Triplets
// Given an array containing N integers, and an number S
// denoting a target sum.
// Find all distinct integers that candid can add up to form target
// sum. The numbers in each triplet should be ordered in
// ascending order, and triplets should be ordered too.
// Return empty array if no such triplet exists.


// if Array is sorted 
function triplets(arr,sum){
    let n = arr.length
    let res = []
    for (let i = 0; i < n; i++) {
       target = sum - arr[i]
       let start = i+1
       let end = n-1
       while(start<end){
         let sum = arr[start] + arr[end]
         if(sum==target){
            res.push([arr[i],arr[start],arr[end]])
            start++
            end--
         }else if(sum>target){
            end--
         }else{
            start++
         }
       }  
    }
    return res
}
// T = O(n^2)
// s = O(n)
console.log(triplets([1,2,3,4,5,6,7,8,9],10))


//if array is not sorted
