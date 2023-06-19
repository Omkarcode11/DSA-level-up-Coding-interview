var validMountainArray = function(arr) {
    if(arr[0]>arr[1])return false
    let i
    let toggle =true
     for(i = 0; i<arr.length;i++){
         if(arr[i]==arr[i+1])return false
         if(toggle){
         if(arr[i]<arr[i+1]){
             continue
         }
         if(arr[i]>arr[i+1]){
            toggle = false
            continue
         }
         }else{
         if(arr[i]>arr[i+1]){
             continue
         }
         if(arr[i]<arr[i+1]){
             return false
         }
         }
     }
 
 
    return true
 };



 console.log(validMountainArray([0,3,2,1]))