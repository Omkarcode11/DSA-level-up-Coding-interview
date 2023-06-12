function findFirstNonRepeatingChar(str){
        let qu = []
        let map = new Map()
        let ans = ''

        for (let i = 0; i < str.length; i++) {
            if(map.has(str[i])){
                map.set(str[i],map.get(str[i])+1)
            }else{
                map.set(str[i],1)
            } 

            while(map.get(qu[0])>1){
                qu.shift()
            }
           
            if(map.get(str[i])==1){
                qu.push(str[i])
            }


            if(qu.length==0){
                ans += '0'
            }else{
                ans += qu[0]
            }
        }
        return ans 
}

console.log(findFirstNonRepeatingChar('aaabbcdbbaac'))