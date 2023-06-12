function subsets(str,i=0,res=[],temp=''){
    if(i==str.length){
        return res
    }
    
    subsets(str,i+1,res,temp)
    ch = str[i]
    temp += ch
    res.push(temp)
   subsets(str,i+1,res,temp)
   return res
}


console.log(subsets('abc'))