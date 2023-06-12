function findingSubsets(str,index=0,temp=''){
    if(str.length==index){
        console.log(temp)
        return 
    }
    findingSubsets(str,index+1,temp +str[index])
    findingSubsets(str,index+1,temp)
}




console.log(findingSubsets('abc'))