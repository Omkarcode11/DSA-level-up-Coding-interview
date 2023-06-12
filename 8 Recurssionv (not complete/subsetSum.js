//Subset Sum 
//Given a set of non-negative integers and a value sum determine if there is a subset of the given set with sum equal to given sum


function subsetSumK(arr,k,i=0,){
    if(i==arr.length){
     if(k==0){
        return 1
     }
     return 0
    }

    let x = subsetSumK(arr,k-arr[i],i+1)
    let y = subsetSumK(arr,k,i+1)
    return x+y
}

console.log(subsetSumK([1,2,3,4,5],6))