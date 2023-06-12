// Maximum Subarray Sum
// Implement a function that takes an input a vector of integers, and prints the maximum subarray sum that can be formed. A subarray is defined as consecutive segment of the array. If all numbers are negative, then return 0.

// Input

// {-1,2,3,4,-2,6,-8,3}
// Output

// 13



// Hint

// Expected Time Complexity
// O(N)


// Space Complexity
// O(1)

function maximumSubArraySum(arr){
    let n = arr.length
    let sum = 0 
    let maxSum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        maxSum = Math.max(maxSum,sum)
        if(sum<0){
            sum =0
        }
        
    }
    return maxSum
}

console.log(maximumSubArraySum([-1,2,3,4,-2,6,-8,3]))