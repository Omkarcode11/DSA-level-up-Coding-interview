// Reading Books
// Given number of pages inn different books and m students The books are arranged in any order (not necessarily ascending) of number of pages. Every student is assigned to read some consecutive segment of books. The task is to assign books in such a way that the maximum number of pages assigned to a student is minimum.
// Find the maximum number of pages that a student will have to read.
// Sample Input
// books = [10, 20,30,15]
// students = 2
// Sample Output
// 45

function readingBook(arr,k){
   let start = arr.reduce((a,b)=>Math.max(a,b))
   let end = arr.reduce((a,b)=>a+b)
   let ans = 0
   while(start<=end){
    let mid = start + Math.floor((end-start)/2)
    if(maxReading(arr,k,mid)){
        ans = mid
        start = mid+1
    }else{
        end = mid-1
    }
   }
   return ans
}

function maxReading(arr,k,page){
    let count = 0
    let sum = 0 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if(sum >=page){
            count++
           sum =  arr[i] 
        }
    }
    return count >=k
}
// function readingBook(arr,k){
//    let start = arr.reduce((a,b)=>Math.max(a,b))
//    let end = arr.reduce((a,b)=>a+b)
//    let ans = 0
//    while(start<=end){
//     let mid = start + Math.floor((end-start)/2)
//     if(maxReading(arr,k,mid)){
//         ans = Math.min(ans,mid)
//         end = mid-1
//     }else{
    //         start = mid+1
//     }
//    }
//    return ans
// }

// function maxReading(arr,k,page){
//     let count = 1
//     let sum = 0 
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//         if(sum >=page){
//             count++
//            sum =  arr[i] 
        //  if(students>k){
        //      return false
        //  }
//         }

//     }
//     return true
// }

console.log(readingBook([10,20,30,15],2))