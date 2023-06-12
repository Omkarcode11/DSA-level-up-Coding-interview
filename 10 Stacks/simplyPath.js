function simplyPath(str){
    str = str.split('/')
    let st = ['']
    for (let i = 0; i < str.length; i++) {
        if(str[i]=='.'){
            continue
        }else if(str[i]==='..'){
            st.pop()
        }else{
            if(str[i]!='')
            st.push(str[i])
        }
    }
    // if()
    if(st.length==1)return `/${st[0]}`
    if(st.length==0)return '/'
    return st.join('/')
    // return '/'
}

console.log(simplyPath('/a/../.././../../.'))