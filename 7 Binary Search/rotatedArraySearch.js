// Rotated Search
// Write a function that takes input an sorted array of
// distinct integers, which is rotated about a pivot point and
// finds the index of any given lement.
// Sample Input
// [7,9,10,1,2,3,4,5,6]
// element =4
// Sample Output
// 6



function search(arr,k){
   let start = 0
   let end = arr.length-1
   while(start<=end){
    let mid = start + Math.floor((end-start)/2)
    if(arr[mid]==k){
        return mid
    }else if(arr[start]<=arr[mid]){
        if(arr[start]<=k && arr[mid]>k){
            end = mid-1
        }else{
            start = mid+1
        }
    }else{
        if(arr[end]>=k && arr[mid]<k){
            start = mid+1
        }else{
            end = mid-1
        }
    }
   }
   return -1
}

console.log(search([7,9,10,1,2,3,4,5,6],6))