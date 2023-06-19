function reverse(str){
    let newstr = str
    let i = 0
    let j = str.length-1
   while(i<j){
       let temp = newstr[i]
       newstr[i] = newstr[j]
       newstr[j] = temp
    i++
    j--
   }
  return newstr
}




console.log(reverse('omkar'))