// Space20
// Given a string, write a function to replace all spaces in a
// string with '%20'. It is given that the string has sufficient
// space at the end to hold the additional characters.
// Sample Input
// hello world, how are you?
// Sample Output
// hello%20world,%20%20how%20are%20you?


function space20(str){
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    if(str[i]==' '){
        str[i] = '%20'
    }
  }
  return str.join('')
}

console.log(space20('hello world, how are you?'))